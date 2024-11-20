import React from 'react';

import Svg, {Path} from 'react-native-svg';

import {WIDTH} from '../../function';
interface Props {
  title: string;
  color?: string;
  width?: number;
  height?: number;
}
const ItemIconSVG = (props: Props) => {
  const {title, color, width, height} = props;

  switch (title) {
    case 'Bài tập':
      return (
        <Svg
          width={width || WIDTH(28)}
          height={height || WIDTH(28)}
          viewBox="0 0 24 24"
          fill="none">
          <Path
            stroke={color || 'black'}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12.2 7h9.2v14.4h-9.2zM3 5v13.15h4.955a5 5 0 0 1 3.248 1.198l.997.852"
          />
          <Path
            stroke={color || 'black'}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5.9 3h3.8a2.5 2.5 0 0 1 2.5 2.5V17l-.2-.188a5 5 0 0 0-3.422-1.354H5.9V3ZM15 10h3.6M15 12.7h3.6M15 15.4h3.6M15 18.1h3.6"
          />
        </Svg>
      );

    default:
      return (
        <Svg
          width={width || WIDTH(21)}
          height={height || WIDTH(21)}
          viewBox="0 0 24 24"
          fill="none">
          <Path
            fill={color || 'black'}
            d="M4 20c-.55 0-1.021-.196-1.413-.588A1.922 1.922 0 0 1 2 18V6c0-.55.196-1.021.588-1.413A1.922 1.922 0 0 1 4 4h6l2 2h8c.55 0 1.021.196 1.413.588.392.392.588.863.587 1.412H4v10l2.4-8h17.1l-2.575 8.575c-.133.433-.38.78-.738 1.038A1.978 1.978 0 0 1 19 20H4Z"
          />
        </Svg>
      );
  }
};

export default ItemIconSVG;
