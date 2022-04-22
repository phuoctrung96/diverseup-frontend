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
  let countImg = 0;
  if (images.length == 1) {
    countImg = 1;
  } else if (images.length == 3) {
    countImg = 3;
  }

  return (
    <div className={countImg == 1 ? '' : style.wrapper}>
      {images.map((img) => {
        return (
          <div key={img.src} className={countImg == 1 ? style.oneItem : style.item}>
            <img src={img.src} alt={img.alt} className={style.image} />
            <p className={style.text}>{img.author}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Image;
