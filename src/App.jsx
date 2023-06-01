import React from 'react';
import gallaryAPI from './servicec/gallary_api';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Modal from 'components/Modal';
import styles from './components/styles.module.css';
import Loader from 'components/Loader';

class App extends React.Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    showModal: false,
    modalImg: '',
    isLoading: false,
    error: null,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onChangeQuery = query => {
    this.setState({
      images: [],
      currentPage: 1,
      searchQuery: query,
      error: null,
    });
  };
  onImgClick = e => {
    this.setState({ modalImg: e.currentTarget.name });
    this.toggleModal();
  };

  fetchGallary = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { currentPage, searchQuery };

    this.setState({ isLoading: true });

    gallaryAPI
      .fetchImages(options)
      .then(hits => {
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => {
        this.setState({ error: error.message });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchGallary();
    }
  }

  render() {
    const { images, showModal, modalImg, isLoading } = this.state;
    const { onChangeQuery, onImgClick, fetchGallary, toggleModal } = this;
    const showLoadMoreBtn = images.length > 0 && !isLoading;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={onChangeQuery} />
        <ImageGallery images={images} onClick={onImgClick} />
        {isLoading && <Loader />}
        {showLoadMoreBtn && <Button onClick={fetchGallary} />}
        <Modal onClose={toggleModal} image={modalImg} open={showModal} />
      </div>
    );
  }
}

export default App;
