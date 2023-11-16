import React from "react";

export default function Card(props){
    
    
    return (
            <div className="group relative rounded overflow-hidden mx-1 cursor-pointer text-sm">
                <img className="rounded w-full h-full object-fill max-h-[250px] sm:max-h-[350px]"
                src={`${props.image_base_url}${props.poster}`} 
                alt={`${props.original_title}`} 
                onClick = {()=>{props.openModal();props.fetchMoviesById(props.id);props.playTrailer()}}
                />
                <div className="bg-bg-opa70 h-0 w-full px-1 absolute bottom-0 flex items-center justify-end  group-hover:h-7 overflow-hidden transition-all duration-300 sm:px-5">
                    {/* play icon */}
                    <button
                        onClick = {()=>{props.openModal();props.fetchMoviesById(props.id);props.playTrailer()}}>
                        <svg  className="w-5 h-5 hover:scale-150 transition-all duration-300" viewBox="0 0 52 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.1045 42C40.4062 42 52 32.7502 52 21.34C52 9.92984 40.4062 0.680054 26.1045 0.680054C11.8028 0.680054 0.208954 9.92984 0.208954 21.34C0.208954 32.7502 11.8028 42 26.1045 42Z" fill="#DA4167"/>
                        <path d="M39.4987 21.34L19.8538 32.0262V21.5345V10.6538L39.4987 21.34Z" fill="#F4D35E"/>
                        <path d="M19.8538 32.7386C19.711 32.7386 19.5672 32.7116 19.4368 32.656C19.1439 32.5328 18.9609 32.2905 18.9609 32.0262V10.6538C18.9609 10.3895 19.1439 10.1473 19.4368 10.0241C19.7297 9.90011 20.0833 9.9172 20.3574 10.0654L40.0023 20.7516C40.2452 20.8841 40.3917 21.1042 40.3917 21.34C40.3917 21.5758 40.2452 21.796 40.0014 21.9285L20.3566 32.6147C20.2056 32.6966 20.0297 32.7386 19.8538 32.7386ZM20.7468 12.0024V30.6783L37.9137 21.34L20.7468 12.0024Z" fill="#F4D35E"/>
                        </svg>
                    </button>
                    
                    {/* info icon */}
                    <button
                        onClick = {()=>{props.openModal();props.fetchMoviesById(props.id)}}>               
                        <svg  className="w-[30px] h-[30px hover:scale-150 transition-all duration-300]"  viewBox="0 0 79 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1_73)">
                        <path d="M39.4999 4.16668C57.6792 4.16668 72.4166 13.4941 72.4166 25C72.4166 36.5058 57.6792 45.8333 39.4999 45.8333C21.3206 45.8333 6.58328 36.5058 6.58328 25C6.58328 13.4941 21.3206 4.16668 39.4999 4.16668ZM39.4999 8.33335C24.9564 8.33335 13.1666 15.7953 13.1666 25C13.1666 34.2048 24.9564 41.6667 39.4999 41.6667C54.0435 41.6667 65.8333 34.2048 65.8333 25C65.8333 15.7953 54.0435 8.33335 39.4999 8.33335ZM39.467 20.8333C41.3031 20.8333 42.7916 21.7754 42.7916 22.9375V33.6121C43.7755 33.9723 44.4374 34.6456 44.4374 35.4167C44.4374 36.5673 42.9638 37.5 41.1458 37.5H39.5329C37.6964 37.5 36.2083 36.5579 36.2083 35.3958V25C34.3903 25 32.9166 24.0673 32.9166 22.9167C32.9166 21.7661 34.3903 20.8333 36.2083 20.8333H39.467ZM39.4999 14.5833C41.3179 14.5833 42.7916 15.5161 42.7916 16.6667C42.7916 17.8173 41.3179 18.75 39.4999 18.75C37.682 18.75 36.2083 17.8173 36.2083 16.6667C36.2083 15.5161 37.682 14.5833 39.4999 14.5833Z" fill="#DA4167"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1_73">
                        <rect width="79" height="50" rx="5" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </button>

                    {/* like icon */}
                    <button 
                        onClick={()=>{props.saveMovieIdToLocalStorage(props.id)}}
                        className="mr-auto">

                        {!props.likedMoviesId.includes(props.id) && <svg  className="w-[25px] h-[25px] -ml-[2px] hover:scale-150 transition-all duration-300" viewBox="0 0 70 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.1818 50.1441C13.2478 50.1441 10.8183 48.7173 9.84156 46.4209C7.47058 40.8489 6.44546 35.2526 6.79492 29.7868C6.95515 27.2506 9.20499 25.5282 12.3935 25.5015C13.0484 25.4959 13.7039 25.4942 14.3598 25.4942C14.8654 25.4942 16.8437 25.4983 17.3277 25.4983C17.3277 25.4983 22.3472 25.3524 22.3644 25.3522L22.4637 25.3516C23.3105 25.3516 23.9531 25.5206 24.4316 25.7426C24.8292 25.4137 25.3053 25.164 25.7748 25.0235C26.4966 24.8082 26.7255 24.5809 26.8658 24.3672C27.0681 24.0591 27.2757 23.7671 27.4758 23.4846C27.6027 23.3056 27.7298 23.1269 27.8532 22.9466C28.9119 21.4027 30.3119 20.0698 32.1346 18.8702C34.8802 17.0633 36.7489 14.6485 38.0778 12.7089C38.0849 12.6519 38.0923 12.5797 38.0975 12.5211C38.1065 12.4274 38.1155 12.3348 38.1267 12.2442C38.1902 11.7455 38.2298 11.2486 38.2451 10.7645C38.3537 7.36291 41.4069 5.58422 44.3658 5.58422C45.1962 5.58422 46.0214 5.71291 46.8177 5.96686C49.4717 6.81334 50.1123 8.22637 50.6773 9.47311C50.7218 9.57129 50.768 9.67334 50.8173 9.77905C52.1519 12.6627 51.9291 16.6261 50.2882 19.2036C50.0027 19.652 49.7331 20.1066 49.4648 20.5728C49.7574 20.5949 50.0432 20.6143 50.3223 20.6297C50.6535 20.648 50.9988 20.6506 51.2928 20.6506L52.0658 20.6484C52.9192 20.6484 53.8431 20.6712 54.8182 20.8358C57.1829 21.2347 59.0475 22.2619 60.0668 23.7278C61.0077 25.0804 61.168 26.7122 60.5352 28.3706C62.0722 30.4251 62.0107 33.1897 60.3755 35.3336C61.0843 37.6664 60.1133 40.1749 57.8843 41.8322C58.1976 44.1525 56.7941 45.5883 53.3775 46.5375C51.3682 47.0963 49.1996 47.4265 46.7463 47.5471C44.3783 47.6633 42.3371 47.7641 40.0542 47.7641C39.0892 47.7641 38.1328 47.7464 37.1301 47.7099C36.9264 47.7028 36.6994 47.6966 36.4536 47.6906C34.4053 47.6377 31.1467 47.5535 28.6721 46.4441C28.6103 46.6643 28.5056 46.8907 28.3418 47.1191C27.6429 48.0934 26.4075 48.3338 25.6692 48.4773C24.7376 48.6582 23.8076 48.8398 22.8777 49.0207C21.2565 49.3367 19.635 49.6525 18.0127 49.9649C17.3991 50.0842 16.7825 50.1441 16.1818 50.1441Z" fill="#F4D35E"/>
                        <path d="M57.7481 34.5664C59.2462 32.9446 59.3277 30.6586 57.9157 29.1466C57.5777 28.7837 57.5703 28.5139 57.7604 28.1173C58.9545 25.6147 57.5649 23.4972 54.2445 22.9369C52.8751 22.7058 51.5413 22.8514 50.1304 22.7734C48.6798 22.6931 47.1171 22.5173 45.5511 22.4301C45.6988 22.0642 45.7619 21.8292 45.8847 21.6141C46.5278 20.4866 47.1403 19.3471 47.8431 18.2432C49.1835 16.1376 49.2756 12.7357 48.2475 10.514C47.6481 9.21873 47.4488 8.4874 45.7898 7.95824C43.5517 7.24475 41.0618 8.23582 40.979 10.817C40.962 11.3639 40.9177 11.9118 40.8483 12.4562C40.8001 12.8356 40.8056 13.2587 40.5871 13.5788C38.8259 16.1689 36.7874 18.6111 33.8901 20.5174C32.3988 21.499 31.179 22.6256 30.261 23.9643C29.943 24.429 29.6029 24.8841 29.295 25.3526C28.7421 26.1946 27.8556 26.7008 26.7474 27.0314C26.5051 27.1038 26.1969 27.3677 26.1896 27.5509C26.1012 29.5146 25.9377 31.4834 26.0471 33.4424C26.2352 36.8002 26.8827 40.6497 28.4361 43.2725C29.8044 45.5828 34.9584 45.4813 37.2556 45.5647C40.7408 45.6908 43.2709 45.5662 46.5751 45.4036C48.5805 45.305 50.534 45.0499 52.4655 44.5128C55.2683 43.734 55.5075 42.9821 54.9926 41.3035C54.9883 41.0809 55.2021 40.7776 55.437 40.6433C57.4689 39.479 58.389 37.3265 57.5725 35.4415C57.4213 35.0926 57.4752 34.8623 57.7481 34.5664ZM25.8341 45.28C23.6324 39.7139 22.4213 34.0566 23.2908 28.2083C23.3715 27.6663 23.0828 27.491 22.4137 27.5004L17.3783 27.647C15.7267 27.647 14.0746 27.6358 12.4225 27.6504C10.6884 27.6646 9.61323 28.5143 9.526 29.8949C9.17874 35.3257 10.2465 40.5973 12.4351 45.7405C13.1835 47.5002 15.0842 48.3186 17.3624 47.8792C19.9139 47.3883 22.4626 46.8881 25.0127 46.3929C26.1053 46.1802 26.1647 46.1143 25.8341 45.28ZM19.9609 42.1208C21.1895 42.1208 22.1853 42.9034 22.1853 43.8685C22.1853 44.834 21.1895 45.6169 19.9609 45.6169C18.7324 45.6169 17.7365 44.834 17.7365 43.8685C17.7365 42.9032 18.7324 42.1208 19.9609 42.1208Z" fill="#272424"/>
                        </svg>}
                        
                        {/* <svg  className="w-[25px] h-[25px] -ml-[2px] hover:scale-150 transition-all duration-300" viewBox="0 0 70 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.1818 50.1441C13.2478 50.1441 10.8183 48.7173 9.84156 46.4209C7.47058 40.8489 6.44546 35.2526 6.79492 29.7868C6.95515 27.2506 9.20499 25.5282 12.3935 25.5015C13.0484 25.4959 13.7039 25.4942 14.3598 25.4942C14.8654 25.4942 16.8437 25.4983 17.3277 25.4983C17.3277 25.4983 22.3472 25.3524 22.3644 25.3522L22.4637 25.3516C23.3105 25.3516 23.9531 25.5206 24.4316 25.7426C24.8292 25.4137 25.3053 25.164 25.7748 25.0235C26.4966 24.8082 26.7255 24.5809 26.8658 24.3672C27.0681 24.0591 27.2757 23.7671 27.4758 23.4846C27.6027 23.3056 27.7298 23.1269 27.8532 22.9466C28.9119 21.4027 30.3119 20.0698 32.1346 18.8702C34.8802 17.0633 36.7489 14.6485 38.0778 12.7089C38.0849 12.6519 38.0923 12.5797 38.0975 12.5211C38.1065 12.4274 38.1155 12.3348 38.1267 12.2442C38.1902 11.7455 38.2298 11.2486 38.2451 10.7645C38.3537 7.36291 41.4069 5.58422 44.3658 5.58422C45.1962 5.58422 46.0214 5.71291 46.8177 5.96686C49.4717 6.81334 50.1123 8.22637 50.6773 9.47311C50.7218 9.57129 50.768 9.67334 50.8173 9.77905C52.1519 12.6627 51.9291 16.6261 50.2882 19.2036C50.0027 19.652 49.7331 20.1066 49.4648 20.5728C49.7574 20.5949 50.0432 20.6143 50.3223 20.6297C50.6535 20.648 50.9988 20.6506 51.2928 20.6506L52.0658 20.6484C52.9192 20.6484 53.8431 20.6712 54.8182 20.8358C57.1829 21.2347 59.0475 22.2619 60.0668 23.7278C61.0077 25.0804 61.168 26.7122 60.5352 28.3706C62.0722 30.4251 62.0107 33.1897 60.3755 35.3336C61.0843 37.6664 60.1133 40.1749 57.8843 41.8322C58.1976 44.1525 56.7941 45.5883 53.3775 46.5375C51.3682 47.0963 49.1996 47.4265 46.7463 47.5471C44.3783 47.6633 42.3371 47.7641 40.0542 47.7641C39.0892 47.7641 38.1328 47.7464 37.1301 47.7099C36.9264 47.7028 36.6994 47.6966 36.4536 47.6906C34.4053 47.6377 31.1467 47.5535 28.6721 46.4441C28.6103 46.6643 28.5056 46.8907 28.3418 47.1191C27.6429 48.0934 26.4075 48.3338 25.6692 48.4773C24.7376 48.6582 23.8076 48.8398 22.8777 49.0207C21.2565 49.3367 19.635 49.6525 18.0127 49.9649C17.3991 50.0842 16.7825 50.1441 16.1818 50.1441Z" fill="#F4D35E"/>
                        <path d="M57.7481 34.5664C59.2462 32.9446 59.3277 30.6586 57.9157 29.1466C57.5777 28.7837 57.5703 28.5139 57.7604 28.1173C58.9545 25.6147 57.5649 23.4972 54.2445 22.9369C52.8751 22.7058 51.5413 22.8514 50.1304 22.7734C48.6798 22.6931 47.1171 22.5173 45.5511 22.4301C45.6988 22.0642 45.7619 21.8292 45.8847 21.6141C46.5278 20.4866 47.1403 19.3471 47.8431 18.2432C49.1835 16.1376 49.2756 12.7357 48.2475 10.514C47.6481 9.21873 47.4488 8.4874 45.7898 7.95824C43.5517 7.24475 41.0618 8.23582 40.979 10.817C40.962 11.3639 40.9177 11.9118 40.8483 12.4562C40.8001 12.8356 40.8056 13.2587 40.5871 13.5788C38.8259 16.1689 36.7874 18.6111 33.8901 20.5174C32.3988 21.499 31.179 22.6256 30.261 23.9643C29.943 24.429 29.6029 24.8841 29.295 25.3526C28.7421 26.1946 27.8556 26.7008 26.7474 27.0314C26.5051 27.1038 26.1969 27.3677 26.1896 27.5509C26.1012 29.5146 25.9377 31.4834 26.0471 33.4424C26.2352 36.8002 26.8827 40.6497 28.4361 43.2725C29.8044 45.5828 34.9584 45.4813 37.2556 45.5647C40.7408 45.6908 43.2709 45.5662 46.5751 45.4036C48.5805 45.305 50.534 45.0499 52.4655 44.5128C55.2683 43.734 55.5075 42.9821 54.9926 41.3035C54.9883 41.0809 55.2021 40.7776 55.437 40.6433C57.4689 39.479 58.389 37.3265 57.5725 35.4415C57.4213 35.0926 57.4752 34.8623 57.7481 34.5664ZM25.8341 45.28C23.6324 39.7139 22.4213 34.0566 23.2908 28.2083C23.3715 27.6663 23.0828 27.491 22.4137 27.5004L17.3783 27.647C15.7267 27.647 14.0746 27.6358 12.4225 27.6504C10.6884 27.6646 9.61323 28.5143 9.526 29.8949C9.17874 35.3257 10.2465 40.5973 12.4351 45.7405C13.1835 47.5002 15.0842 48.3186 17.3624 47.8792C19.9139 47.3883 22.4626 46.8881 25.0127 46.3929C26.1053 46.1802 26.1647 46.1143 25.8341 45.28ZM19.9609 42.1208C21.1895 42.1208 22.1853 42.9034 22.1853 43.8685C22.1853 44.834 21.1895 45.6169 19.9609 45.6169C18.7324 45.6169 17.7365 44.834 17.7365 43.8685C17.7365 42.9032 18.7324 42.1208 19.9609 42.1208Z" fill="#DA4167"/>#272424
                        </svg> */}
                        
                        {props.likedMoviesId.includes(props.id) && <svg  className="w-[25px] h-[25px] -ml-[2px] hover:scale-150 transition-all duration-300" viewBox="0 0 70 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.1818 50.1441C13.2478 50.1441 10.8183 48.7173 9.84156 46.4209C7.47058 40.8489 6.44546 35.2526 6.79492 29.7868C6.95515 27.2506 9.20499 25.5282 12.3935 25.5015C13.0484 25.4959 13.7039 25.4942 14.3598 25.4942C14.8654 25.4942 16.8437 25.4983 17.3277 25.4983C17.3277 25.4983 22.3472 25.3524 22.3644 25.3522L22.4637 25.3516C23.3105 25.3516 23.9531 25.5206 24.4316 25.7426C24.8292 25.4137 25.3053 25.164 25.7748 25.0235C26.4966 24.8082 26.7255 24.5809 26.8658 24.3672C27.0681 24.0591 27.2757 23.7671 27.4758 23.4846C27.6027 23.3056 27.7298 23.1269 27.8532 22.9466C28.9119 21.4027 30.3119 20.0698 32.1346 18.8702C34.8802 17.0633 36.7489 14.6485 38.0778 12.7089C38.0849 12.6519 38.0923 12.5797 38.0975 12.5211C38.1065 12.4274 38.1155 12.3348 38.1267 12.2442C38.1902 11.7455 38.2298 11.2486 38.2451 10.7645C38.3537 7.36291 41.4069 5.58422 44.3658 5.58422C45.1962 5.58422 46.0214 5.71291 46.8177 5.96686C49.4717 6.81334 50.1123 8.22637 50.6773 9.47311C50.7218 9.57129 50.768 9.67334 50.8173 9.77905C52.1519 12.6627 51.9291 16.6261 50.2882 19.2036C50.0027 19.652 49.7331 20.1066 49.4648 20.5728C49.7574 20.5949 50.0432 20.6143 50.3223 20.6297C50.6535 20.648 50.9988 20.6506 51.2928 20.6506L52.0658 20.6484C52.9192 20.6484 53.8431 20.6712 54.8182 20.8358C57.1829 21.2347 59.0475 22.2619 60.0668 23.7278C61.0077 25.0804 61.168 26.7122 60.5352 28.3706C62.0722 30.4251 62.0107 33.1897 60.3755 35.3336C61.0843 37.6664 60.1133 40.1749 57.8843 41.8322C58.1976 44.1525 56.7941 45.5883 53.3775 46.5375C51.3682 47.0963 49.1996 47.4265 46.7463 47.5471C44.3783 47.6633 42.3371 47.7641 40.0542 47.7641C39.0892 47.7641 38.1328 47.7464 37.1301 47.7099C36.9264 47.7028 36.6994 47.6966 36.4536 47.6906C34.4053 47.6377 31.1467 47.5535 28.6721 46.4441C28.6103 46.6643 28.5056 46.8907 28.3418 47.1191C27.6429 48.0934 26.4075 48.3338 25.6692 48.4773C24.7376 48.6582 23.8076 48.8398 22.8777 49.0207C21.2565 49.3367 19.635 49.6525 18.0127 49.9649C17.3991 50.0842 16.7825 50.1441 16.1818 50.1441Z" fill="#F4D35E"/>
                        <path d="M57.7481 34.5664C59.2462 32.9446 59.3277 30.6586 57.9157 29.1466C57.5777 28.7837 57.5703 28.5139 57.7604 28.1173C58.9545 25.6147 57.5649 23.4972 54.2445 22.9369C52.8751 22.7058 51.5413 22.8514 50.1304 22.7734C48.6798 22.6931 47.1171 22.5173 45.5511 22.4301C45.6988 22.0642 45.7619 21.8292 45.8847 21.6141C46.5278 20.4866 47.1403 19.3471 47.8431 18.2432C49.1835 16.1376 49.2756 12.7357 48.2475 10.514C47.6481 9.21873 47.4488 8.4874 45.7898 7.95824C43.5517 7.24475 41.0618 8.23582 40.979 10.817C40.962 11.3639 40.9177 11.9118 40.8483 12.4562C40.8001 12.8356 40.8056 13.2587 40.5871 13.5788C38.8259 16.1689 36.7874 18.6111 33.8901 20.5174C32.3988 21.499 31.179 22.6256 30.261 23.9643C29.943 24.429 29.6029 24.8841 29.295 25.3526C28.7421 26.1946 27.8556 26.7008 26.7474 27.0314C26.5051 27.1038 26.1969 27.3677 26.1896 27.5509C26.1012 29.5146 25.9377 31.4834 26.0471 33.4424C26.2352 36.8002 26.8827 40.6497 28.4361 43.2725C29.8044 45.5828 34.9584 45.4813 37.2556 45.5647C40.7408 45.6908 43.2709 45.5662 46.5751 45.4036C48.5805 45.305 50.534 45.0499 52.4655 44.5128C55.2683 43.734 55.5075 42.9821 54.9926 41.3035C54.9883 41.0809 55.2021 40.7776 55.437 40.6433C57.4689 39.479 58.389 37.3265 57.5725 35.4415C57.4213 35.0926 57.4752 34.8623 57.7481 34.5664ZM25.8341 45.28C23.6324 39.7139 22.4213 34.0566 23.2908 28.2083C23.3715 27.6663 23.0828 27.491 22.4137 27.5004L17.3783 27.647C15.7267 27.647 14.0746 27.6358 12.4225 27.6504C10.6884 27.6646 9.61323 28.5143 9.526 29.8949C9.17874 35.3257 10.2465 40.5973 12.4351 45.7405C13.1835 47.5002 15.0842 48.3186 17.3624 47.8792C19.9139 47.3883 22.4626 46.8881 25.0127 46.3929C26.1053 46.1802 26.1647 46.1143 25.8341 45.28ZM19.9609 42.1208C21.1895 42.1208 22.1853 42.9034 22.1853 43.8685C22.1853 44.834 21.1895 45.6169 19.9609 45.6169C18.7324 45.6169 17.7365 44.834 17.7365 43.8685C17.7365 42.9032 18.7324 42.1208 19.9609 42.1208Z" fill="#DA4167"/>#272424
                        </svg>}

                    </button>
                    <p className=''>
                        <svg className='inline-block align-top w-[20px] h-[20px] mr-1' viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.2948 35.8841L14.0647 41.6347C13.8489 41.7693 13.599 41.8355 13.3465 41.8251C13.094 41.8146 12.8502 41.7279 12.6457 41.5758C12.4411 41.4237 12.2851 41.2131 12.1972 40.9704C12.1092 40.7277 12.0933 40.4638 12.1514 40.2119L14.6387 29.4406L6.44555 22.2254C6.25403 22.0566 6.11551 21.8335 6.04742 21.5843C5.97932 21.335 5.98468 21.0707 6.06282 20.8246C6.14096 20.5785 6.2884 20.3615 6.4866 20.201C6.68479 20.0404 6.9249 19.9435 7.17672 19.9224L17.9443 19.0177L22.1127 8.8064C22.2101 8.56754 22.3744 8.36353 22.5847 8.22005C22.795 8.07656 23.0421 8 23.2948 8C23.5476 8 23.7946 8.07656 24.005 8.22005C24.2153 8.36353 24.3796 8.56754 24.477 8.8064L28.6453 19.0177L39.413 19.9224C39.6646 19.9438 39.9045 20.041 40.1025 20.2016C40.3004 20.3623 40.4476 20.5792 40.5256 20.8253C40.6035 21.0714 40.6087 21.3356 40.5406 21.5847C40.4724 21.8338 40.3339 22.0567 40.1424 22.2254L31.951 29.4406L34.4383 40.2119C34.4964 40.4638 34.4805 40.7277 34.3925 40.9704C34.3046 41.2131 34.1485 41.4237 33.944 41.5758C33.7395 41.7279 33.4957 41.8146 33.2432 41.8251C32.9907 41.8355 32.7408 41.7693 32.525 41.6347L23.2948 35.8841Z" fill="#FFA534"/>
                        </svg>
                        <span className="inline-block align-text-top">{props.rating.toFixed(1)}</span>
                    </p>
                </div>
            </div>
    )
}