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
    case 'Message':
      return (
        <Svg
          width={width || WIDTH(20)}
          height={height || WIDTH(20)}
          viewBox="0 0 20 20"
          fill="none">
          <Path
            stroke="#4D5761"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M6 8.075V8m4 .075V8m4 .075V8m-4.26 5.826L5.564 18v-4.174H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7.826a2 2 0 0 1-2 2H9.74Z"
          />
        </Svg>
      );
    case 'Heart':
      return (
        <Svg
          width={width || WIDTH(20)}
          height={height || WIDTH(20)}
          viewBox="0 0 20 20"
          fill="none">
          <Path
            stroke="#4D5761"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.172 5.172a4 4 0 0 1 5.656 0L10 6.343l1.172-1.17a4 4 0 1 1 5.656 5.655L10 17.658l-6.828-6.83a4 4 0 0 1 0-5.656Z"
            clipRule="evenodd"
          />
        </Svg>
      );
    case 'Verify':
      return (
        <Svg
          width={width || WIDTH(16)}
          height={height || WIDTH(16)}
          viewBox="0 0 16 16"
          fill="none">
          <Path
            fill={color || '#3864FF'}
            d="m15.333 8-1.627-1.86.227-2.46-2.406-.547L10.267 1 8 1.973 5.733 1l-1.26 2.127-2.406.54.226 2.466L.667 8l1.626 1.86-.227 2.467 2.407.546L5.733 15 8 14.02l2.267.973 1.26-2.126 2.406-.547-.226-2.46L15.332 8Zm-8.607 3.147-2.533-2.54.987-.987 1.546 1.553 3.9-3.913.987.987-4.886 4.9Z"
          />
        </Svg>
      );
    case 'Three dot':
      return (
        <Svg
          width={width || WIDTH(20)}
          height={height || WIDTH(20)}
          viewBox="0 0 20 20"
          fill="none">
          <Path
            fill="#121212"
            d="M5 8.333c-.917 0-1.667.75-1.667 1.667s.75 1.667 1.667 1.667 1.667-.75 1.667-1.667S5.917 8.333 5 8.333Zm10 0c-.917 0-1.667.75-1.667 1.667s.75 1.667 1.667 1.667 1.667-.75 1.667-1.667-.75-1.667-1.667-1.667Zm-5 0c-.917 0-1.667.75-1.667 1.667s.75 1.667 1.667 1.667 1.667-.75 1.667-1.667-.75-1.667-1.667-1.667Z"
          />
        </Svg>
      );
    case 'Image comment':
      return (
        <Svg
          width={width || WIDTH(20)}
          height={height || WIDTH(20)}
          viewBox="0 0 20 20"
          fill="none">
          <Path
            fill="#4D5761"
            d="M2.907 15.563a.75.75 0 0 0 1.06 1.061l-1.06-1.06Zm4.28-3.22.53-.53a.75.75 0 0 0-1.06 0l.53.53Zm1.875 1.876-.53.53a.75.75 0 0 0 1.06 0l-.53-.53ZM13.282 10l.53-.53a.75.75 0 0 0-1.061 0l.53.53Zm3.219 4.28a.75.75 0 0 0 1.06-1.06l-1.06 1.06ZM3.968 16.624l3.75-3.75-1.06-1.06-3.75 3.75 1.06 1.06Zm2.69-3.75 1.874 1.875 1.06-1.06-1.874-1.876-1.06 1.061Zm2.935 1.875 4.219-4.219-1.061-1.06-4.219 4.218 1.06 1.061Zm3.158-4.219 3.75 3.75 1.06-1.06-3.75-3.75-1.06 1.06ZM5.313 3.25h9.375v-1.5H5.312v1.5ZM16.75 5.313v9.375h1.5V5.312h-1.5ZM14.687 16.75H5.313v1.5h9.375v-1.5ZM3.25 14.687V5.313h-1.5v9.375h1.5Zm2.063 2.063a2.062 2.062 0 0 1-2.063-2.063h-1.5a3.563 3.563 0 0 0 3.563 3.563v-1.5Zm11.437-2.063c0 1.14-.923 2.063-2.063 2.063v1.5a3.563 3.563 0 0 0 3.563-3.563h-1.5ZM14.687 3.25c1.14 0 2.063.923 2.063 2.063h1.5a3.563 3.563 0 0 0-3.563-3.563v1.5Zm-9.374-1.5A3.563 3.563 0 0 0 1.75 5.313h1.5c0-1.14.923-2.063 2.063-2.063v-1.5Zm2.062 4.969a.656.656 0 0 1-.656.656v1.5c1.19 0 2.156-.965 2.156-2.156h-1.5Zm-.656.656a.656.656 0 0 1-.657-.656h-1.5c0 1.19.966 2.156 2.157 2.156v-1.5Zm-.657-.656c0-.363.294-.657.657-.657v-1.5c-1.191 0-2.157.966-2.157 2.157h1.5Zm.657-.657c.362 0 .656.294.656.657h1.5c0-1.191-.965-2.157-2.156-2.157v1.5Z"
          />
        </Svg>
      );
    case 'Sentiment':
      return (
        <Svg
          width={width || WIDTH(20)}
          height={height || WIDTH(20)}
          viewBox="0 0 20 20"
          fill="none">
          <Path
            fill={color || '#4D5761'}
            d="M12.917 9.167a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM7.083 9.167a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
          />
          <Path
            fill={color || '#4D5761'}
            d="M10 13.333c-1.233 0-2.292-.675-2.875-1.666H5.733a4.58 4.58 0 0 0 8.534 0h-1.392A3.32 3.32 0 0 1 10 13.333ZM9.992 1.667c-4.6 0-8.325 3.733-8.325 8.333s3.725 8.333 8.325 8.333c4.608 0 8.341-3.733 8.341-8.333S14.6 1.667 9.992 1.667Zm.008 15A6.665 6.665 0 0 1 3.333 10 6.665 6.665 0 0 1 10 3.333 6.665 6.665 0 0 1 16.667 10 6.665 6.665 0 0 1 10 16.667Z"
          />
        </Svg>
      );
    case 'Manage':
      return (
        <Svg
          width={width || WIDTH(20)}
          height={height || WIDTH(20)}
          viewBox="0 0 20 20"
          fill="none">
          <Path
            fill={color || '#fff'}
            fillRule="evenodd"
            d="M8.883 2.56a2.5 2.5 0 0 1 2.236 0L16 5v6.69c0 2.31-2.136 3.87-6 6.31-3.865-2.44-6-4.5-6-6.31V5l4.882-2.44Zm4.208 5.852a.833.833 0 1 0-1.179-1.178l-2.41 2.41-.911-.91a.833.833 0 1 0-1.179 1.178l1.5 1.5a.833.833 0 0 0 1.178 0l3-3Z"
            clipRule="evenodd"
          />
        </Svg>
      );
    case 'Flag':
      return (
        <Svg
          width={width || WIDTH(20)}
          height={height || WIDTH(20)}
          viewBox="0 0 20 20"
          fill="none">
          <Path
            fill={color || '#3864FF'}
            d="M18.125 4.375v9.375a.625.625 0 0 1-.216.469c-1.193 1.033-2.335 1.406-3.423 1.406-1.477 0-2.857-.683-4.14-1.316-2.075-1.028-3.878-1.918-5.971-.264V17.5a.625.625 0 0 1-1.25 0V4.375a.625.625 0 0 1 .216-.469c2.813-2.436 5.337-1.188 7.562-.087 2.144 1.06 4.002 1.978 6.188.087a.625.625 0 0 1 1.034.469Z"
          />
        </Svg>
      );
    case 'Emotion':
      return (
        <Svg
          width={width || WIDTH(21)}
          height={height || WIDTH(20)}
          viewBox="0 0 21 20"
          fill="none">
          <Path
            fill={color || '#24BEAC'}
            fillRule="evenodd"
            d="M10.667 18.333a8.333 8.333 0 1 0 0-16.666 8.333 8.333 0 0 0 0 16.666ZM8.579 12.03a.625.625 0 0 0-.828.937l.23.176c.135.095.33.216.577.336.496.24 1.214.48 2.109.48.894 0 1.612-.24 2.108-.48a4.29 4.29 0 0 0 .737-.454l.07-.058a.625.625 0 0 0-.827-.937l-.116.087c-.09.062-.227.15-.409.237a3.576 3.576 0 0 1-1.563.354c-.668 0-1.2-.178-1.564-.354a3.052 3.052 0 0 1-.408-.237l-.116-.087Zm6.254-3.697a.833.833 0 1 1-1.666 0 .833.833 0 0 1 1.666 0Zm-7.5.834a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667Z"
            clipRule="evenodd"
          />
        </Svg>
      );
    case 'Camera video':
      return (
        <Svg
          width={width || WIDTH(21)}
          height={height || WIDTH(20)}
          viewBox="0 0 21 20"
          fill="none">
          <Path
            fill={color || '#30E0A1'}
            fillRule="evenodd"
            d="M2.333 7.333a4 4 0 0 1 4-4H10a4 4 0 0 1 4 4v5.334a4 4 0 0 1-4 4H6.333a4 4 0 0 1-4-4V7.333ZM5.875 10c0-.345.28-.625.625-.625h3.333a.625.625 0 0 1 0 1.25H6.5A.625.625 0 0 1 5.875 10Zm9.666 2.977-.291-.31V7.332l.29-.31C16.78 5.7 19 6.578 19 8.39v3.218c0 1.813-2.22 2.69-3.46 1.368Z"
            clipRule="evenodd"
          />
        </Svg>
      );
    case 'Camera':
      return (
        <Svg
          width={width || WIDTH(20)}
          height={height || WIDTH(20)}
          viewBox="0 0 20 20"
          fill="none">
          <Path
            fill={color || '#EF6820'}
            fillRule="evenodd"
            d="M16 17.3H4a2 2 0 0 1-2-2V7.1a2 2 0 0 1 2-2h2l1.16-1.987a.833.833 0 0 1 .719-.413h4.243c.296 0 .57.157.72.413L14 5.1h2a2 2 0 0 1 2 2v8.2a2 2 0 0 1-2 2Zm-6-3.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            clipRule="evenodd"
          />
        </Svg>
      );
    case 'Add user':
      return (
        <Svg
          width={width || WIDTH(21)}
          height={height || WIDTH(20)}
          viewBox="0 0 21 20"
          fill="none">
          <Path
            fill={color || '#8981DA'}
            fillRule="evenodd"
            d="M12 5.833a3.333 3.333 0 1 1-6.667 0 3.333 3.333 0 0 1 6.667 0Zm2.5 8.334c0 1.84-2.612 3.333-5.833 3.333-3.222 0-5.834-1.492-5.834-3.333 0-1.841 2.612-3.334 5.834-3.334 3.221 0 5.833 1.493 5.833 3.334Zm.833-3.542a.625.625 0 0 1-.625-.625V8.958h-1.041a.625.625 0 1 1 0-1.25h1.041V6.667a.625.625 0 1 1 1.25 0v1.041H17a.625.625 0 1 1 0 1.25h-1.042V10c0 .345-.28.625-.625.625Z"
            clipRule="evenodd"
          />
        </Svg>
      );
    case 'Locate':
      return (
        <Svg
          width={width || WIDTH(20)}
          height={height || WIDTH(20)}
          viewBox="0 0 20 20"
          fill="none">
          <Path
            fill={color || '#32AE60'}
            fillRule="evenodd"
            d="M10 18.333c2.813 0 7.5-5.168 7.5-9.259 0-4.09-3.358-7.407-7.5-7.407-4.142 0-7.5 3.316-7.5 7.407s4.688 9.26 7.5 9.26Zm0-6.666a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
            clipRule="evenodd"
          />
        </Svg>
      );
    case 'Image':
      return (
        <Svg
          width={width || WIDTH(21)}
          height={height || WIDTH(20)}
          viewBox="0 0 21 20"
          fill="none">
          <Path
            fill={color || '#FBA94B'}
            fillRule="evenodd"
            d="M1.375 5a3.958 3.958 0 0 1 3.958-3.958h10A3.958 3.958 0 0 1 19.292 5v10a3.958 3.958 0 0 1-3.959 3.958h-10A3.958 3.958 0 0 1 1.375 15V5Zm3.958-2.708A2.708 2.708 0 0 0 2.625 5v7.083l2.101 1.401a3.333 3.333 0 0 0 4.206-.416l2.802-2.802a3.333 3.333 0 0 1 4.206-.417l1.984 1.323c.041.027.08.056.118.086V5a2.708 2.708 0 0 0-2.709-2.708h-10Zm2.084 6.875a2.083 2.083 0 1 0 0-4.167 2.083 2.083 0 0 0 0 4.167Z"
            clipRule="evenodd"
          />
        </Svg>
      );
    case 'Search':
      return (
        <Svg
          width={width || WIDTH(24)}
          height={height || WIDTH(24)}
          viewBox="0 0 24 24"
          fill="none">
          <Path
            fill={color || '#0D121C'}
            d="M15.755 14.255h-.79l-.28-.27a6.471 6.471 0 0 0 1.57-4.23 6.5 6.5 0 1 0-6.5 6.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99 1.49-1.49-4.99-5Zm-6 0c-2.49 0-4.5-2.01-4.5-4.5s2.01-4.5 4.5-4.5 4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5Z"
          />
        </Svg>
      );
    case 'Chevron left':
      return (
        <Svg
          width={width || WIDTH(24)}
          height={height || WIDTH(24)}
          viewBox="0 0 24 24"
          fill="none">
          <Path
            stroke={color || '#4D5761'}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m15 17-5-5 5-5"
          />
        </Svg>
      );
    case 'Bài tập':
      return (
        <Svg
          width={width || WIDTH(24)}
          height={height || WIDTH(24)}
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
