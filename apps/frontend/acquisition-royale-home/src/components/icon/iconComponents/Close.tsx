import { IconProps } from '../icon.types'

type Props = Omit<IconProps, 'name'>

const Close: React.FC<Props> = ({ color = 'white', width = '16', height = '16', onClick }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <path
      d="M7.99765 16C6.94709 16.001 5.90664 15.7948 4.93584 15.3932C3.96505 14.9916 3.08297 14.4023 2.34011 13.6593C1.59725 12.9163 1.00819 12.034 0.606646 11.0629C0.205099 10.0919 -0.00104813 9.05117 4.00721e-06 8.00035V7.84036C0.0320013 6.27196 0.524085 4.74754 1.4151 3.45657C2.30611 2.1656 3.55676 1.165 5.01162 0.579127C6.46647 -0.0067448 8.06138 -0.152053 9.59812 0.161261C11.1349 0.474575 12.5457 1.2327 13.6552 2.3414C14.7746 3.46019 15.5371 4.88601 15.8461 6.43841C16.155 7.9908 15.9967 9.6 15.3909 11.0623C14.7852 12.5246 13.7594 13.7744 12.4434 14.6533C11.1273 15.5323 9.58012 16.0009 7.99765 16V16ZM7.99765 9.1283L10.069 11.2002L11.1967 10.0723L9.12532 8.00035L11.1967 5.92844L10.069 4.80049L7.99765 6.8724L5.92626 4.80049L4.79859 5.92844L6.86999 8.00035L4.79859 10.0723L5.92626 11.2002L7.99765 9.1291V9.1283Z"
      fill={color}
    />
  </svg>
)

export default Close