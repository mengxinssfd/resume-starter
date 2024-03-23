import style from './personal-advantage.module.scss';
import { DataContext } from '@/context';
import { useContext, type FC, type ReactElement } from 'react';
import { List, Panel } from '@/components/common';

export const PersonalAdvantage: FC = (): ReactElement => {
  const { personalAdvantage } = useContext(DataContext);

  return (
    <Panel className={style.root} title="个人优势">
      <List tag="ul" list={personalAdvantage} />
    </Panel>
  );
};
