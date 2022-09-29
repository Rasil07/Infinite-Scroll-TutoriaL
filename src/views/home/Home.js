import React from "react";
import { Banner, InfiniteScrollTrigger, PostCard } from "../../components";
import * as Services from "../../services";

import "./style/home_style.css";

export const Home = () => {
  const [loading, setLoading] = React.useState(false);
  const [postList, setPostList] = React.useState([]);
  const [pagination, setPagination] = React.useState({
    start: 0,
    limit: 10,
  });
  const fetchPosts = React.useCallback(async () => {
    const params = {
      start: pagination.start,
      limit: pagination.limit,
    };
    if (params.start > 500) return;
    setLoading(true);
    const posts = await Services.fetchPosts(params);
    if (posts && posts.length) {
      setPostList((prev) => [...prev, ...posts]);
    }
    setLoading(false);
  }, [pagination]);

  const loadMore = React.useCallback(() => {
    if (loading) return;
    console.log("loading more==>");
    setPagination((prev) => ({
      ...prev,
      start: prev.start + prev.limit,
    }));
  }, [loading]);

  React.useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);
  return (
    <div className="home_wrapper">
      <Banner />
      <div className="post_list_wrapper">
        {postList.map((post, index) => {
          return <PostCard post={post} key={index} />;
        })}
      </div>
      {loading && <p>loading ...</p>}
      <InfiniteScrollTrigger callbackFn={loadMore} />
    </div>
  );
};
