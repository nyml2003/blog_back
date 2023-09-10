import { defineStore } from "pinia";
import { ref } from "vue";
export const useBlogStore = defineStore("blog", () => {
  const blog = ref({
    title: "",
    content: "",
    description: "",
  });
  const blogList = ref([]);
  function setBlog(blog_) {
    blog.value = {
      title: blog_.title,
      content: blog_.content,
      description: blog_.description,
    };
  }
  function resetBlog() {
    title.value = "";
    content.value = "";
    description.value = "";
  }
  function getBlog() {
    return blog.value;
  }
  function getNextId(id) {
    for (let i = 0; i < blogList.value.length; i++) {
      if (blogList.value[i].id == id) {
        if (i + 1 < blogList.value.length) {
          return blogList.value[i + 1].id;
        } else {
          return 0;
        }
      }
    }
  }
  function getPrevId(id) {
    for (let i = 0; i < blogList.value.length; i++) {
      if (blogList.value[i].id == id) {
        if (i - 1 >= 0) {
          return blogList.value[i - 1].id;
        } else {
          return 0;
        }
      }
    }
  }
  function getBlogList() {
    return blogList.value;
  }
  function setBlogList(blogList_) {
    blogList.value = blogList_;
  }
  function resetBlogList() {
    blogList.value = [];
  }
  return {
    blog,
    blogList,
    setBlog,
    resetBlog,
    getBlog,
    getNextId,
    getPrevId,
    getBlogList,
    setBlogList,
    resetBlogList,
  };
});
