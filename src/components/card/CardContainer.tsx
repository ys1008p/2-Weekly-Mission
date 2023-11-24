import CardItem from '@/components/card/CardItem';
interface CardContainerProps {
  itemList: Array<{
    id: number;
    createdAt: string;
    url: string;
    title: string;
    imageSource?: string;
  }>;
}

const CardContainer = ({ itemList }: CardContainerProps) => (
  <div className="card-container">
    {itemList.map((item) => (
      <CardItem
        key={item.id}
        thumbnail={item.imageSource}
        createdAt={item.createdAt}
        title={item.title}
        url={item.url}
      />
    ))}
  </div>
);

export default CardContainer;
