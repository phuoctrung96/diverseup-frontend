import { Pagination } from 'interfaces';
import axios from 'utils/axios.config';

export interface IBlogItem {
  slug: string;
  image: string;
  title: string;
  short_description: string;
}
export interface IBlogsRes extends Pagination {
  items: IBlogItem[];
}

export const blogsApi = (
  p: Pick<Pagination, 'page' | 'size'>,
  highlighted = false
): Promise<IBlogsRes> => {
  if (highlighted) {
    return axios.get(`/api/blogs?page=${p.page}&size=${p.size}&highlighted=true`);
  }

  return axios.get(`/api/blogs?page=${p.page}&size=${p.size}`);
};

export const relatedBlogsApi = (
  slug: string,
  p: Pick<Pagination, 'page' | 'size'> = { page: 1, size: 3 }
): Promise<IBlogsRes> => {
  return axios.get(`/api/blog/${slug}/related?page=${p.page}&size=${p.size}`);
};

export interface IBlogDetails extends IBlogItem {
  body: string;
}

export const getBlogApi = (slug: string): Promise<IBlogDetails> => {
  return axios.get(`/api/blog/${slug}`);
};
