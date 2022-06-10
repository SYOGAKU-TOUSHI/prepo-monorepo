import { IconProps } from '../../icon.types'

type Props = Omit<IconProps, 'name' | 'onClick'>

const AppleIcon: React.FC<Props> = ({ width = '25', height = '25' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.8383 13.9068C16.485 14.6714 16.3158 15.013 15.8625 15.6876C15.2287 16.631 14.3333 17.808 13.2266 17.8164C12.2429 17.8239 11.9887 17.1885 10.6533 17.1989C9.3183 17.2055 9.03997 17.828 8.05455 17.8172C6.94872 17.808 6.10122 16.7472 5.46705 15.8064C3.69247 13.1647 3.5058 10.0697 4.60205 8.42263C5.37747 7.25471 6.60497 6.56888 7.75705 6.56888C8.9308 6.56888 9.66872 7.19971 10.6387 7.19971C11.5812 7.19971 12.1546 6.56763 13.5121 6.56763C14.5387 6.56763 15.6246 7.11471 16.4 8.05721C13.8625 9.41638 14.2745 12.9585 16.8383 13.9068Z"
      fill="#42A5F5"
    />
    <path
      d="M12.6559 5.34812C13.1846 4.69103 13.5859 3.76312 13.4401 2.81812C12.578 2.87562 11.5688 3.40895 10.9796 4.09937C10.4455 4.72853 10.0026 5.6627 10.1751 6.56687C11.1163 6.59562 12.0905 6.05312 12.6559 5.34812Z"
      fill="#42A5F5"
    />
    <path
      d="M15.4434 8.8269C11.8034 12.8186 8.47002 9.06857 3.98169 11.919C4.13794 13.1802 4.61919 14.5452 5.46711 15.8069C6.10086 16.7477 6.94877 17.8086 8.05461 17.8177C9.04002 17.8282 9.31836 17.2057 10.6534 17.1994C11.9888 17.1894 12.2425 17.8244 13.2267 17.8169C14.3334 17.8082 15.2288 16.6311 15.8625 15.6882C16.3159 15.0136 16.485 14.6719 16.8384 13.9073C14.6692 13.1048 14.0488 10.449 15.4434 8.8269Z"
      fill="#1E88E5"
    />
  </svg>
)

export default AppleIcon