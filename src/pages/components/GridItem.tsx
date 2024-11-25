import { Avatar } from '@lobehub/ui';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { SearchItem } from '../../type';
import { useStyles } from './style';

const GridItem = memo<SearchItem>(({ content, link, title }) => {
  const { styles } = useStyles();

  return (
    <a className={styles.link} href={link!} rel="noreferrer" target={'_blank'}>
      <Flexbox distribution={'space-between'} flex={1} gap={12} padding={12}>
        <Flexbox>
          <Flexbox>
            <Flexbox className={styles.title}>{title}</Flexbox>
          </Flexbox>
          <Flexbox className={styles.desc}>{content}</Flexbox>
        </Flexbox>
        <Flexbox align={'center'} gap={8} horizontal>
          <Avatar avatar={title} background={'#000'} size={16} />
          <Flexbox>
            <Flexbox className={styles.desc}>未知来源</Flexbox>
          </Flexbox>
        </Flexbox>
      </Flexbox>
    </a>
  );
});

export default GridItem;
