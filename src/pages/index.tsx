import { fetchPluginMessage } from '@lobehub/chat-plugin-sdk';
import { Card } from 'antd';
import { createStyles } from 'antd-style';
import dayjs from 'dayjs';
import { memo, useEffect, useState } from 'react';
import { Flexbox } from 'react-layout-kit';

import { ResponseData } from '@/type';

const useStyles = createStyles(({ css, token }) => ({
  date: css`
    color: ${token.colorTextQuaternary};
  `,
}));

const Render = memo(() => {
  const [data, setData] = useState<ResponseData>();
  const { styles } = useStyles();

  useEffect(() => {
    fetchPluginMessage().then((e: ResponseData) => {
      setData(e);
    });
  }, []);

  return (
    <Flexbox gap={24}>
      <Flexbox distribution={'space-between'} horizontal>
        🌟心情：{data?.mood}
        <span className={styles.date}>{dayjs(data?.today).format('YYYY/MM/DD')}</span>
      </Flexbox>
      <Flexbox gap={8}>
        推荐衣物
        <Flexbox gap={12} horizontal>
          {data?.clothes?.map((item) => (
            <Card key={item.name} size={'small'} title={item.name}>
              {item.description}
            </Card>
          ))}
        </Flexbox>
      </Flexbox>
    </Flexbox>
  );
});

export default Render;
