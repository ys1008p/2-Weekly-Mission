import CardItem from '@/components/card/CardItem';
interface CardContainerProps {
  items: Array<{
    id: number;
    createdAt: string;
    url: string;
    title: string;
    imageSource?: string;
  }>;
}

const CardContainer = ({ items }: CardContainerProps) => (
  <div className="card-container">
    {items.map((item) => (
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
