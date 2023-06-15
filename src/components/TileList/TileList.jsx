import {
  TileListEl,
  TileItems,
  TileItemsTitle,
  TileItemsSubtitle,
} from './TileListStyled';
import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    title: 'Блок 1',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, dolore laudantium. Tempore saepe dolor iste officiis perspiciatis distinctio enim pariatur, cumque in, repellendus fuga illum harum architecto excepturi perferendis? Dicta?',
  },
  {
    id: nanoid(),
    title: 'Блок 2',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, dolore laudantium. Tempore saepe dolor iste officiis perspiciatis distinctio enim pariatur, cumque in, repellendus fuga illum harum architecto excepturi perferendis? Dicta?',
  },
  {
    id: nanoid(),
    title: 'Блок 3',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, dolore laudantium. Tempore saepe dolor iste officiis perspiciatis distinctio enim pariatur, cumque in, repellendus fuga illum harum architecto excepturi perferendis? Dicta?',
  },
  {
    id: nanoid(),
    title: 'Блок 4',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, dolore laudantium. Tempore saepe dolor iste officiis perspiciatis distinctio enim pariatur, cumque in, repellendus fuga illum harum architecto excepturi perferendis? Dicta?',
  },
];

const TileList = () => {
  const elements = items.map(({ id, title, text }) => (
    <TileItems key={id}>
      <TileItemsTitle>{title}</TileItemsTitle>
      <TileItemsSubtitle>{text}</TileItemsSubtitle>
    </TileItems>
  ));
  return <TileListEl>{elements}</TileListEl>;
};

export default TileList;
