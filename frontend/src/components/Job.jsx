import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

const Job = () => {
    return (
        <div className='p-6 rounded-2xl bg-gradient-to-br from-white to-blue-50 border border-gray-200 shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 ease-in-out cursor-pointer group w-full'>
            <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">2 days ago</p>
                <Button variant="outline" className="rounded-full" size="icon">
                    <Bookmark />
                </Button>

            </div>

            <div className="flex items-center gap-2 my-2">
                <Button>
                    <Avatar>
                        <AvatarImage src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSExAVFRUVFhUVFRUVFRUVFRUVFRUWFhUVFRYYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQGi0lHyUtLS0tKy0tLS0tLS0rLS0tLS0tLS0tLS0tKy0tLS0uLS4tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAECBAUGBwj/xAA9EAABAwIDBQUGBQIGAwEAAAABAAIRAyEEEjEFQVFhcQaBkaHwEyIyQrHBFFJi0eFy8QcVI4KSwjNDsiT/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAArEQACAgEEAgEDAgcAAAAAAAAAAQIRAxIhMUEEE1EiYXEy8AUjM0KRwfH/2gAMAwEAAhEDEQA/APSmFGaUNjUVrVIiQKmEzQiAIAYJ06dADJ4SVTaW0qWHZnrVGsbMS46ngBvKALaeFxD/APEzB5iA2qQPmDWwY3i6uYX/ABBwLzl9q5p/UwgeUophaOtATwsE9rcFMfiG9QHEeIELUweNp1W5qdRrxxaQUAFqkBYG18aG71obRqkArkNpUy+ZKhyNIxMba2LzFYuW62DgSTChUwMblNmtFBvVAxVYgcVPGHK0odN2doTsVFLA1HvqLuNn0nAarlsDTyVOq6vCVCQlYUauGPOVpNqgBZ9CnZXqGEJQmS0U8Q4u0V/ZlCFYZs1XcPh4VIhlqkLKRCkxqlCskAWpFiNlShFioCGJ8qLCUIsAWVBr0zCtFDqPRYUc9jmu0XP7Q2QX3XW4yCsytiWt1UtlJHDu2U4GISXS1MWyTdJLUVpOxaFNcG7trT/OPFM3tow/MnYaTv2kKQI4rz53bVg+ZCHbynPxIthpR6QE8Lh8P2zpn5x4q/S7V0z8wS1BoOnqvDQXEgAAkk6AC5JXg/b3tH+MxJLXH2VOW0xuk2L+/wDZdT2+7WF9P8PSfAcM1V43M3M715RnETxJN4i1h9BzC1guzHI96Je09XRBVtwPH13etK+f1b118U5PL1z9c1ZmXaWJcLtdpwWxsrtPXoOBa/viDHhB71zmf15/zz6qWe/rx/n6JDVnqGH7c+1bD4nTMLeI3dyp4rtFBhwjhwPRcDRrQtGjjgRlfdvC1uh3LOWNPg2hla5Ovwu2GuMyj4jaDTZcRi8MQ3NSJcNS35gOPNZTNsuBmSs9DNvYjqtq1MwKBs+tDQsJ+2pBkqFLaRAsUUw1Kzt9n0Q54JXV4drWiwXnWydrXEld3snFiros3saKma2FxJJhdNs7RZOEwg1WlScGpxZMkaoAUgxZZ2k0b1cw2Ma7QrRSRk4stQmhLOFE1BxVWTRKEyZtQFTlFhRFJPmTyiwogQhVKasSh1EBRl16K57bNCdCugxuJDd6yKjc5WbaNIxZyhwJ/MnXSOwfJJTqLo8DFYqbcSQqAqJGouujjsuuxJO9R9uqYepooVlsVTxVrBOe9wYHG+tzYC5PgsvPC0dlO9yo+YsGD/dd3kB4pUO6D7XxskgWGmsaWieEDyWVhAS3TeRw3nw4I+JrNbNpd5TBgeIVY4gn7RwBzC3QqiVuWI/jmYkTxtPgnaRGvCDyOh6g2VcOPHTTuu0eCm2PHzDv5SsdBieXd9R9x1TA/vPX5hyN5CiJ79J/UND6GilNtOYHf7zfX2SHQ46eeh1iT5I7HHd943eGn2QAf26tJlp7jz3KTXcb6z1+YdCJO5Kx0XsNXIIg+vr68W2hs1tYF9O1TWIhr+lrH6qu13rja3iLdQOCsU38yeg4xe/UHv5JWOjmCCDBsRYg7kRi3dsYH2g9q1pzCA8ATmG50DesIWKBouUapbddR2c7RllnFciCpMdChxs0Umme0YLtbTy/GJQtpdtmNE5l40+seJVepXPEqViG832O72v25c74ZC2uxvbg/DUddeSF6LQrlpkGFo8aqjNZJXbPpKp2rYGzmWFjf8QKY+ZeQ/5+8tiVlYjFFxmVCxvsuWVdI+gNi9uadQTmW7S7T0j848V8yYXHPZ8LoVqjtmqx2YPM9UPG+mCyrtH0Tie1lJpu5WmdpaZE5l82YrbtV5BLojgrtHtNVgAmUvXL5H7IfB78/tZSB+IJP7V0iPjC+e8VtyodHFUv86rRGcp+uXyHsj8HqnaPtsG1A0Em+5a2yu07SASdy8JdXJMk3Vhu1aoEB5AQ8Qlm+x78e0dP8wSXgH+aVfzlJL0sr3L4CiEzygBxUXuK6DlLLCEXOFnscUXK7gkMJXetDD1cuHZ+pzneByj6LKNJx3K/irNpt4MHnJTQmVHuJ8fof4Um/SOm9vfqEI+u/wDupB099vH+fqgEFDz4f9TeOoPmjMcNNRp3G4Priq2bf0P2cpNG7q3gOLSkMtB079bHkRoeClm379R/ULEf2Vdr/MeDm6KXtJNryQ4C2+zh4ceKRQfP4b/6XfzxSznv+7dfEWsgxa53GI3gHS+h71IPi7RGjp3kaH7nXgkMtM8Ba/KRlPcZRW1G/wATaBIPcAbKmGDQniO4/CforFM8rz3ZhYjv6pAXKdV25xHS3Cde7/ks7b1E521NQ8QT+pus90K01/KetpHyg79JHeFaptFRpYbzcG/xDQ94+qLGkc2QYQw1y6NuzgiM2e1Z+1GvpZzBpuUThzwXW/gGpfgmo9wehnIjDO4IgwLuC6tuDaEUUGI9weg5RmznFTGyXLq2tapBzeCXtY/RE5duxXIg2GV0pxDeCi7GN4JeyQ/VBHNjYZRmbDK2zjRwQ3bQCeuROiBmHYaysds4sXT/AOYBU8dXDgnGcrFKEa2OWFMpsiv1YCqOet0zEYUkkQVkyNwN5mzBwSdsoFaeZOCuZzZ0rFEo0dkAK4zZjUVjlYa9S5MuMYlduzWrH2/QDXDm0AdxK6D2ywu0rpDD1H0/dXhb1EeRFaNjBcfXroEgf4+o+6hm9eugUxTdwjrbSSLa8Quk4wjXDunycP3U2D9jycNOSF7o/VqOUHQjv5ohJOtt0cCNDwCQ0TjidTu3OHNIOmwtaRxkajn/ACohs348dzm7r+rFSB3/AO4dY94evzJFEm8eEOHQ6x5nwRLDQWGv9Lv2+yH9AZ5ZXdd0/RTA46Cx5tOh4b/qkMmOB45DHi0+fLVTpvPeeH5m6gdRz3KAbx/pJ/8Al3rinL/HhvzN4b7i29Aw7TwMTodLG7Se/pqrNCplIItv0iNDF77wO5SwWyK9T4WZW8XWsYOmtr8Fax+xvYtzOeXGQIiBeT13cVi80L03ubrxsjjqrYlXrCSgfiVXc+UMhTSHqZadi0zcUqhCSrSidTLbsUhuxSrpQikJzYf8UkcSg+zUHMRSFqkEdXUDWQsqRaqpENskayBUqqRYommq2FuDNcobqxRjRTfh09g3KVVxKA4LT/DJjhk9SJoy4SWl+GTJ6go6MFFBU2YdM5i5bOumO0KTimBhO1yllxRAarM2/jGjKwsBi4JnfqtR+qy+0LQ5rDwzD6LXC/qMc6+kwjiDoAB0AHH91AyfXh5qbmD10/lN/fwhy6jkQwHh9jqiD+O8XBjzTAHhxHcb6+t6eLefeNUh2Sz8rmCOo1HrmpB2+f1DjB1+58EJ1QD6j7hBdW4ep1CQGngaed2XcNY1LTuny8V6NsfYuGDBUNMAxEm58SuR7LbPIAc4fFBnUAfKLafyuk7T40UqGVp96PdjXMdI74XB5E5OSjE9fw8UFj1zNbFY3DsFmCNLxebAeYXM7a2PUpNOKwrGlutRkCRxc07hGo3aqlsbZNap/qV3FziZDTo3nGk/RdxTwVM0jSdUczMCDDi0kEQsf6ct3fydMksmP6Y0+vk86wNfFFwLqgAkEtuQd8ETC6HYGzaQqDMHOaQcwe97xlDSbgmDpwRMd2fxFIgteytRa05bU6bmDWDlADlY2TjsPRzVKz4DBAnQvdYNjUmMxgflXpwlCUbieHOOSMqkaW09iYWq3K3JTcNCwAETEZmjUXGqx8X2Vo06BrOx1MGDlY6GuceAaTm8Ats7doQHNpj3tM+Vr3jWwrEGOei5/bHaOhiW+zrYWo6m05jlLAWloNwWOjlY8VLp9DVrs5d53b0wK1cbQpVag/DuYGZWZRLsxlsnMTJc695VfG7OqUviFj8wkt6E7j1WTdOjdRbWopSpBQISQTQQvUS5RhOAgNxk4CcpgU7FRMU0jSSa5TL0WPSiApBMaakXqHtEyWhgxRe1ED1FzkxUCyJ0+dJFknRipZVzUkoopWVWu1rbkx63LA6t6J1CmDuarVMW0Df4R3rM2htAmzXCORAPT+6pRslujWq17mbc1X2k5paGzpJPATH0C519R35j4yAhuru/MSujHBR3OfLNy2LzmDz/AH4f0+aGS0eXL5bHxVMvJv69XPioErSzHSWnVx9PEILqpQ0kDoRKPg6eZwaNSQAgLT2CBnJ3gADv1+imXBpBXJHX7NqmhD83wgANdJED5QQQ4DkDHIoWztnvqVDWqmSScrdzQTuEWP0VrBU85A4arpcDhG9wXn5Jafyexigpb9BcDRDWyYC5HtFtZ/t2sps9qNXDdfQDhvM9Fs7epPrTTa8taYnL8RA1E7gUtkbIawaAcSbkxxJuVhGl9Uv8HT9X9rr7kcLtCoGwWZQRBMyAeFly+O2u38LTcWhzzVrOpk3DfdpDOGmxIi0zquwxlalJphwkiO/dC8pxznNDaLtaWdp/qLzPdAC6fDq3X75OL+JPaL/P+gtbETZjiXPvUe4klxn4LjTjx6IHtnOb7zjkbHuzYk6C3eegQi430vAi084HVGc33KTB85c7xd7Mf/J8V6F0eRVjuDvZ5y5okw0G7jBg5RENA4203rd2B2irUsorH2lCoS2XHMWEWIJ4RBg7jIWLjwwFwkE2DYEQ0CGkxyHjKDhLtqNLoBbnAsJez4dd8F471lJLJHc2g3ilt+/ydBUiTGkmOk28kmtVfCmWNJ1gfRWGBY1RsnZMgBBc5KpKiKZQhNiJUJRQxS9kmIECnUsinlsgEAc5RaZUqjEmUyqJGISKLlQKqBUQJSQ5SVUQdVVxQbM35BYWLxrXOzG8aC8ded0Oq+Qbe6OFg6OKpGrJgC1yTN/JZxgbzydAsVWzG1h4DuQgIGaenOeqT63Bo4cfBO5gAzPMn8vrRbcGHIBxt1M+vNMBvSe+TKZxVkMTd6ipfdRhAhJzomSlMBLT2KYzO7h671mLQ2YbHr+ymXBeP9R1GwcYWudI1XRYPEmo7KDA3lcVQrZVqbPxTmyRvXn5I7tns4ZbKJ3WGoti11l7cxFcS2hSkx8TjlaJ38+5Vtl7XMgEaroHkHeFzNU7Z0I4jC4DFBxfUcwuMfDMCNw0hcl2jaRiKkiJN+uUT9fNekbV2xQoHKXAvOjd5B39FwHal2atO8tD7cTII8Gt8F1eM3ruujl8+nhST4Zi7t3XeiUqvvMJ0aR4Zi77lDBTL0DxbLtHCZzDYGWZJNjDrOA6fRGwLIFRwAIawtuDc1DlHQxKAx1NzRBLH/C4atcLkOmbHQEabxwWtsrA+3cynTa72bSHVXO+Z2m6LRMbxJUyelNvguMXNqMVub2I2E8UKNRlM3p+80C4gmDG/u4LMpr0PACplDXOmJ+WJkk8eJXL7f2f7KqTufLhyk3Hj9VwwyanR6OXDo3MV7FJrFPKnyQtTAgKac00+dTa8IFsV3U1KmyUSqQh0X3T6DZMd9OEIuCPVdKrCnJQhS+w4hBrMlHfThQITRLKZopI5SV2RRTxlfoOX0VOnIaY1dAH9I1K0quDptJc5xMnT+Vm4nFyYaIGlk4u+ByVbsHIbvv9EF7iVJjS42HX+VJoyza50/dacGfIIhIJyFFUSIJFOQmQIQSSCSAEr+ztD1/ZUFfwI92eZUT4Lx/qNNg0WjSEBUaImFpUWlcOQ9fCW8JT0O9bNPEhsB9TKDvMGfFUsFR5KHbCtFDI0w51hpMamLW4d6561So65PStjlHYynVrVKzgA0R7skiAIGUGdTeNJcsjGYn2jnPIgk2jQDcEAnimC9WONRdnhZPJlOCi/wDrFCaEWk2bIzcOWmXNJHJU5UZKNkqVBpgAS53PQdF2GDrtwNP2k/EQAOJPAdJXGYWqWvBG5X8fiBVr6+6wNaJNv1ROl/oubLByaT45PQwZIwg5Kruj0rs9t78QCbDgJA8T9gsrtTXDqzKWb38ri1v5r3APG2m9ZOC2rSpjK1zZ4zG7Q+6T4IG1sUWf/oLs1V8MYSIaxsyS1vHX3jfkFjiw1Oy/JzxcKTE0b0Q1ArePDZLxEE7tJIDpHie8FZlRy2ORE3BDJhQFVTJCBAn1UzaqcslNUpWVbE0wzaoITMrgFVhTKQplFBbLOIxAQvbShVGKGiaRLbJl6ZRDkk6FZn4uuXnUwqTgikE/X+SmFEnTTitFSJdtl18MaGDeA5567vBUq5MwrOKeDJ4x4NAA8wqtbjxUwLyPoi0JZkzCkRC0MhFJxTFJAhBKE+5IpjGAW1s6iCIyki5nOB/1Kx6Yut7ZVCb5iBa82n1zTpNbkOTT2NSjgIIguG+7ZH/Jv7LVw2GBFiDzBkeWnesrHYqnRuTNQC2oB4SCs/Zb6gmoXQXGZBg33T9lz5PGUuNjrw+dLHs1Z27KJaFxPanamauWtNmNDZ/UbmPEeC2qm3oGU+9aMzS3MCdLaO1CyndmWj3i6obyfhkTxsd6xxYNErmb5/L9kf5exzT2TJ4RPfKhRde4lda3YNL4s1QgiP8A1+dly+OpNZUc1pJAMAmAfJdiknwcDi1ySoBoPxOnkALzoVeNaQABw1M/wsvgfUoxqQk4jU2uCe0KZEfYR9FVphErVJFyoUSN6aRLdmjgCAZmFsY9gq0YBBIAuTwvYc1i4bMfhpvdoLAxPXuWrh9lF7g2pUFMG4Y0zUJ3uMW3c0muxp9C2Bis9M0HmC12bnpE9dAeeXmUTE0HMOV3cdxHEKltPA+wPtKbS3I6PeM5wRv8YI4FbFWsK1I1Abgh/wDteA0+bYPMT8yzmuzSEujNUajypjVPUCgshTJ1RS9Da8KVNt0UGodzU9JpVm0KJcAiwoA9qrVKasmoqterKpEMQCSDmKSYirhaBeJMxO7fyRMTWa23DQKzinCmwNG5o8/RWI4zdKK1u+jWb9apcknvJTAJgp/L3rbg5+SJCZOHWhMgBSmTpBMQkkkkAHwjCXWHrX7Lb2dno/8AjaXnf/qRHRpEDzWfssgRcTc3DjGgvA4SuhwBa1pMSBJdkOYgfqbqPBV0ZvkxttYBwioc7p+OQDkncSNe6ym5tIsaRDwSQGguaZHH+6JteqHvy03e5lzEtMgDpuGiPhcE2tTDxDXiRmA91wH5o381LT5sqLXDRVw+Gp1HQWimRo9hMNO7MHE20uFax2KxFNwZUdds5KgHxNItPEckVuznta/MAQQWh2YfMIEfmPKyjsnCPDznBdTpwSCYGYAZGkHeT9FnfTNdK5TN3E1PcuwAwAcoMZgBJ81wOIIeMwIkTN4JE8F2u0M7Wn3XukSSAILjuH7rz+FUVRMnbJDgiMa08e4AITSplUSGqNaAQGX1kmbcgh4Z7gTl1jddWHZSAWkC9/dmJG8gTqChYRh9pAgkz0O9IZpYuo57GjMRHE5RO/UybcirRLZa8SHAAzcAxuzOHllValg62gGUa7h0nLraUY7OtmJJMQSJd3hFC1F52NZWbUblGeMvvyA8EgfFqL8YFuizqFT2FdtJx/0nTuGZrarY15OgxxbK0qdIQHAXveDaRz/pPj1Wb2spSadQaOZlPItuPJ3kihqTYZ1OHFp+Ukd4MK17KQqdWtJY8knPTpuM6zlDT5tJ71Zw9eVzyN0yvVokKHt4WpUiFkYqlJsmnZMlXAVuJlTdUValRhEmEUh7gqtRVPaXVutBVUsVohj+1SUISTpBYHE1y5oHTyVUBOkqiqQpNt7iCmkkmIjKQSSTEMQmTpIAZSpsLjASSQgeyNnY+Ey1GFxBBcAREgk6Dxi6HtI+zdTcxzoLXGZIP/kdMcBZJJUzOO4fDuFcGAHOiD8j/wDkPdd3hXNiVwx2Qe+Pyn3XN79D4pJJPgfZ1EMrQ0tkAw3iHR7x5QsapimmuKLXEUqZ94uklzm6T0SSWUezeeyQfHYk5nuFT3GtIAj5gRJ8FwB0CSSuJmxlIlJJNAxmk7ip03e8J7+iSSANmm8tghxI06Cb9O5aTn+6DGsk75IJ87R3pJIJCU6xI0uNeYib90+CDt8A4Y8qjSO8kR5+XRMkgEVqtL3KfKnTvxlub/sgtfCSSxa3NU9ghxJQHYlMkhJBbHbilF9WU6SKKvYruqqYKSSogiQmSSQB/9k=" />
                    </Avatar>
                </Button>
                <div>
                    <h1 className="font-medium text-lg">Company Name</h1>
                    <p className="text-sm text-gray-500"> India</p>
                </div>
            </div>
            <div>
                <h1 className="font-bold text-lg my-2">Title</h1>
                <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, consequuntur!</p>
            </div>


            <div className='flex flex-wrap items-center gap-3 mt-5'>
                <Badge className='bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-full transition-all duration-300 group-hover:bg-blue-200'>
                    Positions
                </Badge>
                <Badge className='bg-red-100 text-red-500 font-semibold px-3 py-1 rounded-full transition-all duration-300 group-hover:bg-red-200'>
                    Part-Time
                </Badge>
                <Badge className='bg-purple-100 text-purple-500 font-semibold px-3 py-1 rounded-full transition-all duration-300 group-hover:bg-purple-200'>
                    24 LPA
                </Badge>
            </div>
            <div className="flex items-center gap-4 mt-4">
                <Button variant="outline">Details</Button>
                <Button className='bg-blue-400'>Save For Later</Button>
            </div>
        </div>
    );
};

export default Job;
