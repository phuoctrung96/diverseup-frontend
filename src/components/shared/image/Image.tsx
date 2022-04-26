import React, { FC } from 'react';
import style from './Image.module.scss';

interface IImageProps {
  images: IImg[];
}

interface IImg {
  src: any;
  alt: string;
  author: string;
}

const Image: FC<IImageProps> = ({ images }) => {
  return (
    <div className={images.length == 1 ? '' : style.wrapper}>
      {images.map((img) => {
        return (
          <div key={img.src} className={images.length == 1 ? style.oneItem : style.item}>
            <img src={img.src} alt={img.alt} className={style.image} />
            <p className={style.text}>{img.author}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Image;
