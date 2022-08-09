import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next"

type Props = {
    item: string
}

const StaticPropsDetail = ({ item }: Props) => {

return (
    <>
        {item}
    </>
    
)};
  
export default StaticPropsDetail

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    try {
      const item = params?.id;
      // By returning { props: item }, the StaticPropsDetail component
      // will receive `item` as a prop at build time
      return { props: { item } }
    } catch (err: any) {
      return { props: { errors: err.message } }
    }
  }