import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token }) => {
  return {
    container: css``,
    desc: css`
      color: ${token.colorTextTertiary};
    `,
    displayLink: css`
      color: ${token.colorTextQuaternary};
    `,
    link: css`
      display: flex;
      flex: 1;
    `,
    title: css`
      margin-top: 4px;
      font-size: 16px;
    `,
  };
});

export default useStyles;
