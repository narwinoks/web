import { GetServerSideProps } from 'next';
import Error from 'next/error';

interface Props {
  errorCode: number | boolean;
  stars: number;
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const errorCode = res.ok ? false : res.status;
  const json = await res.json();

  return {
    props: { errorCode, stars: json.stargazers_count },
  };
};

const Page = ({ errorCode, stars }: Props) => {
  if (typeof errorCode === 'number') {
    return <Error statusCode={errorCode} />;
  }

  return <div>Next stars: {stars}</div>;
};

export default Page;
