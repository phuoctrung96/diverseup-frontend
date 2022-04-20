import React, { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import style from './ModalWindow.module.scss';

interface ModalWindowProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
}

export const ModalWindow: FC<ModalWindowProps> = ({ visible = false, setVisible, children }) => {
  const rootClasses = [style.modal];
  if (visible) {
    rootClasses.push(style.active);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={style.content} onClick={(e) => e.stopPropagation()}>
        <button className={style.close} onClick={() => setVisible(false)} />
        {children}
      </div>
    </div>
  );
};

export default ModalWindow;
