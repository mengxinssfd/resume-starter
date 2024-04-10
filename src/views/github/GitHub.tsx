import { DataContext } from '@/context';
import { useContext, type FC, type ReactNode } from 'react';
import { Panel } from '@/components';
import { getGitHubLink } from '@/utils';
import { usePanelSetting } from '@/hooks';
import style from './github.module.scss';

export const GitHub: FC = (): ReactNode => {
  const {
    contact: { github: username },
  } = useContext(DataContext);
  const { name } = usePanelSetting('github');

  if (!username) return;

  const link = getGitHubLink(username);

  const statistics = `https://github-readme-stats.vercel.app/api?username=${username}&hide_border=true&show_icons=true&include_all_commits=true&line_height=20&locale=cn&custom_title=${username}的github统计`;
  const lang = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&hide_border=true&layout=compact&locale=cn&custom_title=${username}常用的语言`;

  return (
    <Panel className={style.root} title={name}>
      <div className="link">
        <i className="iconfont icon-github"></i>
        <a href={link} target="_blank" rel="noreferrer">
          {link}
        </a>
      </div>
      <img src={statistics} loading="lazy" alt="statistics" />
      <img src={lang} loading="lazy" alt="lang" />
    </Panel>
  );
};
