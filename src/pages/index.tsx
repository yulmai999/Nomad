import Header from '@/components/Header/Header';
import Banner from '@/components/mainPage/Banner/Banner';
import Footer from '@/components/Footer/Footer';
import styles from './index.module.scss';
import BestCardList from '@/containers/mainPage/BestClassList/BestCardList';
import ClassCardList from '@/containers/mainPage/ClassCardList/ClassCardList';
import SearchBarContainer from '@/containers/mainPage/SearchBarContainer/SearchBarContainer';

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.banner}>
        <Banner />
      </div>
      <div className={styles.content}>
        <div className={styles.searchBar}>
          <SearchBarContainer />
        </div>
        <BestCardList method="offset" sort="most_reviewed" />
        <ClassCardList />
      </div>
      <Footer />
    </>
  );
}
