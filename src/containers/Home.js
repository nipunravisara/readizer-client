import React, { useEffect } from "react";
import PostsList from "./PostsList";
import PageLayout from "../layout/PageLayout";
import { useDispatch } from "react-redux";
import { actions } from "../store/actions";
import HeroSection from "./HeroSection";
import Header from "../layout/Header";
import Footer from "./Footer";
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getPosts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <HeroSection />
      <PageLayout>
        <PostsList />
      </PageLayout>
      <Footer />
    </>
  );
};

export default Home;
