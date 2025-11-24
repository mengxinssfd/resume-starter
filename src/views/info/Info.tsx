import type { Contact } from '@/interfaces';
import style from './info.module.scss';
import { yearDiff, getClassNames } from '@tool-pack/basic';
import { DataContext } from '@/context';
import React, { useContext } from 'react';
import { getGitHubLink } from '@/utils';
import { useSettings } from '@/hooks';

export const Info: React.FC = (): React.ReactElement => {
  const { info, contact } = useContext(DataContext);
  const { workAtFractionDigits = 1 } = useSettings('info');

  const experience =
    typeof info.workAt === 'number'
      ? info.workAt
      : yearDiff(new Date(), info.workAt).toFixed(workAtFractionDigits);

  const contactQueue: Array<keyof Contact> = [
    'phone',
    'email',
    'blog',
    'github',
  ];

  const gitHubLink = contact.github ? getGitHubLink(contact.github) : '';
  const contactObj: Record<
    keyof Contact,
    {
      link: string;
      value?: string;
      icon: string;
    }
  > = {
    email: {
      link: `mailto:${contact.email}`,
      value: contact.email,
      icon: 'icon-email',
    },
    phone: {
      link: `tel:${contact.phone}`,
      value: contact.phone,
      icon: 'icon-phone',
    },
    github: {
      link: gitHubLink,
      value: gitHubLink,
      icon: 'icon-github',
    },
    blog: {
      link: contact.blog || '',
      value: contact.blog,
      icon: 'icon-blog',
    },
  };

  return (
    <section className={style.root}>
      <section className="hd-left">
        <section className="title">
          <div className="name">
            <h1>{info.name}</h1>
          </div>
          <div className="job">
            <h2>{info.job}</h2>
          </div>
        </section>
        <section className="info">
          <ul className="clear-list-style">
            <li>
              {info.gender} / {info.from}
            </li>
            <li>
              {info.education} / {info.graduatedSchool}
            </li>
            <li>经验: {experience}年</li>
            <li>{info.arrival}到岗</li>
          </ul>
        </section>
        <section className="contact">
          <ul className="clear-list-style">
            {contactQueue.map((k) => {
              const { value, link, icon } = contactObj[k];
              return (
                value && (
                  <li key={k} title={k}>
                    <a href={link} target="_blank" rel="noreferrer">
                      <span className="contact-link"> {value}</span>
                      <i className={getClassNames('iconfont', icon)}></i>
                    </a>
                  </li>
                )
              );
            })}
          </ul>
        </section>
      </section>
      {info.avatar && (
        <section className="hd-right">
          <img src={info.avatar} alt="" />
        </section>
      )}
    </section>
  );
};
