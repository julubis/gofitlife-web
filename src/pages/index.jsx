import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";

function Index() {

  return (
    <main className="mt-20 container px-4">
      <Carousel/>
      <section className="flex flex-wrap justify-center gap-6 mt-12 lg:mt-0">
        <Link to="/home" className="w-full max-w-sm px-5 py-2.5 rounded-lg shadow-md flex items-center gap-x-2 bg-white hover:bg-gray-50">
          <div>
            <svg className="w-16 h-16" width="96" height="97" viewBox="0 0 96 97" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M84 8.03916V88.7392C84 92.1892 81.3 94.8892 77.85 94.8892H18.45C15 94.8892 12.3 92.1892 12.3 88.7392V8.03916C12.3 4.58916 15 1.88916 18.45 1.88916H78C81.3 1.88916 84 4.58916 84 8.03916Z" fill="white"/>
              <path d="M77.7 96.5391H18.3C14.1 96.5391 10.65 93.0891 10.65 88.8891V8.18906C10.65 3.98906 14.1 0.539062 18.3 0.539062H77.85C82.05 0.539062 85.5 3.98906 85.5 8.18906V88.8891C85.35 93.0891 81.9 96.5391 77.7 96.5391ZM18.3 3.53906C15.75 3.53906 13.65 5.63906 13.65 8.18906V88.8891C13.65 91.4391 15.75 93.5391 18.3 93.5391H77.85C80.4 93.5391 82.5 91.4391 82.5 88.8891V8.18906C82.5 5.63906 80.4 3.53906 77.85 3.53906C77.7 3.53906 18.3 3.53906 18.3 3.53906Z" fill="#33226E"/>
              <path d="M77.1 10.889V27.239C77.1 28.289 76.2 29.189 75.15 29.189H20.85C19.8 29.189 18.9 28.289 18.9 27.239V10.889C18.9 9.83897 19.8 8.93896 20.85 8.93896H75.15C76.2 8.93896 77.1 9.83897 77.1 10.889Z" fill="#4DE2C9"/>
              <path d="M75.15 30.539H20.85C18.9 30.539 17.4 29.039 17.4 27.089V10.889C17.4 8.93897 18.9 7.43896 20.85 7.43896H75.15C77.1 7.43896 78.6 8.93897 78.6 10.889V27.239C78.6 29.039 76.95 30.539 75.15 30.539ZM20.85 10.439C20.7 10.439 20.4 10.589 20.4 10.889V27.239C20.4 27.389 20.55 27.689 20.85 27.689H75.15C75.3 27.689 75.6 27.539 75.6 27.239V10.889C75.6 10.739 75.45 10.439 75.15 10.439H20.85Z" fill="#33226E"/>
              <path d="M55.35 76.889V86.489C55.35 87.389 54.6 88.139 53.7 88.139H42.15C41.25 88.139 40.5 87.389 40.5 86.489V76.889C40.5 75.989 41.25 75.239 42.15 75.239H53.7C54.75 75.389 55.35 75.989 55.35 76.889ZM33.75 57.239V66.839C33.75 67.739 33 68.489 32.1 68.489H20.55C19.65 68.489 18.9 67.739 18.9 66.839V57.239C18.9 56.339 19.65 55.589 20.55 55.589H32.1C33 55.589 33.75 56.339 33.75 57.239ZM55.35 37.589V47.189C55.35 48.089 54.6 48.839 53.7 48.839H42.15C41.25 48.839 40.5 48.089 40.5 47.189V37.589C40.5 36.689 41.25 35.939 42.15 35.939H53.7C54.75 35.939 55.35 36.689 55.35 37.589Z" fill="white"/>
              <path d="M77.1 37.589V47.189C77.1 48.089 76.35 48.839 75.45 48.839H63.9C63 48.839 62.25 48.089 62.25 47.189V37.589C62.25 36.689 63 35.939 63.9 35.939H75.45C76.35 35.939 77.1 36.689 77.1 37.589Z" fill="#FFCD7E"/>
              <path d="M33.75 37.589V47.189C33.75 48.089 33 48.839 32.1 48.839H20.55C19.65 48.839 18.9 48.089 18.9 47.189V37.589C18.9 36.689 19.65 35.939 20.55 35.939H32.1C33 35.939 33.75 36.689 33.75 37.589ZM33.75 76.889V86.489C33.75 87.389 33 88.139 32.1 88.139H20.55C19.65 88.139 18.9 87.389 18.9 86.489V76.889C18.9 75.989 19.65 75.239 20.55 75.239H32.1C33 75.389 33.75 75.989 33.75 76.889ZM55.35 57.239V66.839C55.35 67.739 54.6 68.489 53.7 68.489H42.15C41.25 68.489 40.5 67.739 40.5 66.839V57.239C40.5 56.339 41.25 55.589 42.15 55.589H53.7C54.75 55.589 55.35 56.339 55.35 57.239Z" fill="white"/>
              <path d="M77.1 57.2389V86.4889C77.1 87.3889 76.35 88.1389 75.45 88.1389H63.9C63 88.1389 62.25 87.3889 62.25 86.4889V57.2389C62.25 56.3389 63 55.5889 63.9 55.5889H75.45C76.35 55.5889 77.1 56.3389 77.1 57.2389Z" fill="#FF787D"/>
              <path d="M32.1 34.439H20.55C18.9 34.439 17.4 35.789 17.4 37.589V47.189C17.4 48.839 18.75 50.339 20.55 50.339H32.1C33.75 50.339 35.25 48.989 35.25 47.189V37.589C35.25 35.789 33.9 34.439 32.1 34.439ZM32.1 47.339H20.55L20.4 37.589L32.1 37.439V47.339ZM53.85 73.889H42.3C40.65 73.889 39.15 75.239 39.15 77.039V86.639C39.15 88.289 40.5 89.789 42.3 89.789H53.85C55.5 89.789 57 88.439 57 86.639V77.039C56.85 75.239 55.5 73.889 53.85 73.889ZM53.85 86.639H42.3L42.15 76.889L53.85 76.739V86.639ZM32.1 73.889H20.55C18.9 73.889 17.4 75.239 17.4 77.039V86.639C17.4 88.289 18.75 89.789 20.55 89.789H32.1C33.75 89.789 35.25 88.439 35.25 86.639V77.039C35.25 75.239 33.9 73.889 32.1 73.889ZM32.1 86.639H20.55L20.4 76.889L32.1 76.739V86.639ZM53.85 54.089H42.3C40.65 54.089 39.15 55.439 39.15 57.239V66.839C39.15 68.489 40.5 69.989 42.3 69.989H53.85C55.5 69.989 57 68.639 57 66.839V57.239C56.85 55.589 55.5 54.089 53.85 54.089ZM53.85 66.989H42.3L42.15 57.239L53.85 57.089V66.989ZM32.1 54.089H20.55C18.9 54.089 17.4 55.439 17.4 57.239V66.839C17.4 68.489 18.75 69.989 20.55 69.989H32.1C33.75 69.989 35.25 68.639 35.25 66.839V57.239C35.25 55.589 33.9 54.089 32.1 54.089ZM32.1 66.989H20.55L20.4 57.239L32.1 57.089V66.989ZM75.45 34.439H63.9C62.25 34.439 60.75 35.789 60.75 37.589V47.189C60.75 48.839 62.1 50.339 63.9 50.339H75.45C77.1 50.339 78.6 48.989 78.6 47.189V37.589C78.6 35.789 77.1 34.439 75.45 34.439ZM75.45 47.339H63.9L63.75 37.589L75.45 37.439V47.339ZM53.85 34.439H42.3C40.65 34.439 39.15 35.789 39.15 37.589V47.189C39.15 48.839 40.5 50.339 42.3 50.339H53.85C55.5 50.339 57 48.989 57 47.189V37.589C56.85 35.789 55.5 34.439 53.85 34.439ZM53.85 47.339H42.3L42.15 37.589L53.85 37.439V47.339ZM75.45 54.089H63.9C62.25 54.089 60.75 55.439 60.75 57.239V86.489C60.75 88.139 62.1 89.639 63.9 89.639H75.45C77.1 89.639 78.6 88.289 78.6 86.489V57.239C78.6 55.589 77.1 54.089 75.45 54.089ZM75.45 86.639H63.9L63.75 57.239L75.45 57.089V86.639Z" fill="#33226E"/>
            </svg>
          </div>
          <div>
            <h4 className="font-medium">Kalkulator Kalori</h4>
            <p className="text-sm text-gray-600">Penghitung kalori dengan tepat sesuai usia, tinggi badan, berat badan, jenis kelamin, dan aktivitas harian</p>
          </div>
        </Link>
        <Link to="recipe" className="w-full max-w-sm px-5 py-2.5 rounded-lg shadow-md flex items-center gap-x-2 bg-white hover:bg-gray-50">
          <div>
            <svg className="w-16 h-16" width="97" height="97" viewBox="0 0 97 97" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.1666 92.0391H8.16663C7.37098 92.0391 6.60791 91.723 6.04531 91.1604C5.4827 90.5978 5.16663 89.8347 5.16663 89.0391V8.03906C5.16663 7.24341 5.4827 6.48035 6.04531 5.91774C6.60791 5.35513 7.37098 5.03906 8.16663 5.03906H17.1666L20.1666 11.0391V86.0391L17.1666 92.0391Z" fill="#E15A64"/>
            <path d="M77.1666 15.5391H87.6666C88.8601 15.5391 90.0047 16.0132 90.8486 16.8571C91.6925 17.701 92.1666 18.8456 92.1666 20.0391C92.1666 21.2325 91.6925 22.3771 90.8486 23.221C90.0047 24.065 88.8601 24.5391 87.6666 24.5391H77.1666V15.5391Z" fill="#F6D386"/>
            <path d="M77.1666 32.0391H91.4166C91.6155 32.0391 91.8063 32.1181 91.947 32.2587C92.0876 32.3994 92.1666 32.5902 92.1666 32.7891V43.2891C92.1666 43.488 92.0876 43.6787 91.947 43.8194C91.8063 43.96 91.6155 44.0391 91.4166 44.0391H77.1666V32.0391Z" fill="#80A4A3"/>
            <path d="M92.1666 60.5391H77.1666V51.5391H92.1666L87.6666 56.0391L92.1666 60.5391Z" fill="#537DBD"/>
            <path d="M80.1666 11.0391V86.0391C80.1666 87.6304 79.5345 89.1565 78.4093 90.2817C77.284 91.4069 75.7579 92.0391 74.1666 92.0391H17.1666V5.03906H74.1666C75.7579 5.03906 77.284 5.6712 78.4093 6.79642C79.5345 7.92164 80.1666 9.44776 80.1666 11.0391Z" fill="#B3B3B3"/>
            <path d="M72.6666 11.0391V86.0391C72.6666 87.6304 72.0345 89.1565 70.9093 90.2817C69.784 91.4069 68.2579 92.0391 66.6666 92.0391H17.1666V5.03906H66.6666C68.2579 5.03906 69.784 5.6712 70.9093 6.79642C72.0345 7.92164 72.6666 9.44776 72.6666 11.0391Z" fill="#CCCCCC"/>
            <path d="M66.655 37.6171C66.5852 36.3782 66.2091 35.1761 65.5605 34.1184C64.9119 33.0606 64.0109 32.1803 62.9385 31.5564C61.866 30.9324 60.6555 30.5843 59.4154 30.5432C58.1753 30.502 56.9443 30.7692 55.8329 31.3208C55.3587 29.7907 54.4073 28.4526 53.1178 27.5022C51.8283 26.5518 50.2685 26.0391 48.6666 26.0391C47.0648 26.0391 45.5049 26.5518 44.2154 27.5022C42.926 28.4526 41.9745 29.7907 41.5004 31.3208C39.821 30.489 37.891 30.3161 36.0905 30.8361C34.29 31.3561 32.7494 32.5314 31.7721 34.1305C30.7948 35.7297 30.4516 37.6367 30.8101 39.4762C31.1685 41.3158 32.2027 42.9544 33.709 44.0695C34.1791 44.4249 34.5679 44.8766 34.8492 45.3945C35.1305 45.9123 35.298 46.4843 35.3403 47.0721L36.6666 63.5391H60.6666L61.9928 47.0721C62.0351 46.4843 62.2025 45.9123 62.4839 45.3945C62.7652 44.8766 63.1539 44.4249 63.6241 44.0695C64.6258 43.3307 65.4275 42.3538 65.9567 41.2272C66.4859 40.1005 66.7259 38.8598 66.655 37.6171Z" fill="#FAEFD0"/>
            <path d="M36.6666 63.5391H60.6666V68.7891C60.6666 68.988 60.5876 69.1787 60.447 69.3194C60.3063 69.46 60.1155 69.5391 59.9166 69.5391H37.4166C37.2177 69.5391 37.0269 69.46 36.8863 69.3194C36.7456 69.1787 36.6666 68.988 36.6666 68.7891V63.5391Z" fill="#F3E7C7"/>
            <path d="M92.1666 30.5391H81.6666V26.0391H87.6666C89.2579 26.0391 90.784 25.4069 91.9093 24.2817C93.0345 23.1565 93.6666 21.6304 93.6666 20.0391C93.6666 18.4478 93.0345 16.9216 91.9093 15.7964C90.784 14.6712 89.2579 14.0391 87.6666 14.0391H81.6666V11.0391C81.6644 9.05062 80.8735 7.14427 79.4675 5.73823C78.0614 4.33219 76.1551 3.5413 74.1666 3.53906H8.16663C6.97358 3.54045 5.82979 4.015 4.98618 4.85862C4.14257 5.70223 3.66802 6.84601 3.66663 8.03906V89.0391C3.66802 90.2321 4.14257 91.3759 4.98618 92.2195C5.82979 93.0631 6.97358 93.5377 8.16663 93.5391H74.1666C76.1551 93.5368 78.0614 92.7459 79.4675 91.3399C80.8735 89.9339 81.6644 88.0275 81.6666 86.0391V62.0391H92.1666C92.4633 62.0391 92.7533 61.9511 93 61.7863C93.2467 61.6215 93.4389 61.3872 93.5525 61.1131C93.666 60.839 93.6957 60.5374 93.6378 60.2464C93.58 59.9554 93.4371 59.6882 93.2273 59.4784L89.7878 56.0391L93.2273 52.5998C93.4371 52.39 93.58 52.1227 93.6378 51.8317C93.6957 51.5407 93.666 51.2391 93.5525 50.965C93.4389 50.6909 93.2467 50.4567 93 50.2918C92.7533 50.127 92.4633 50.0391 92.1666 50.0391H81.6666V45.5391H92.1666C92.5644 45.5391 92.946 45.381 93.2273 45.0997C93.5086 44.8184 93.6666 44.4369 93.6666 44.0391V32.0391C93.6666 31.6412 93.5086 31.2597 93.2273 30.9784C92.946 30.6971 92.5644 30.5391 92.1666 30.5391ZM15.6666 90.5391H8.16663C7.76894 90.5386 7.38767 90.3804 7.10646 90.0992C6.82525 89.818 6.66707 89.4368 6.66663 89.0391V8.03906C6.66707 7.64138 6.82525 7.2601 7.10646 6.9789C7.38767 6.69769 7.76894 6.53951 8.16663 6.53906H15.6666V90.5391ZM78.6666 86.0391C78.6652 87.2321 78.1907 88.3759 77.3471 89.2195C76.5034 90.0631 75.3597 90.5377 74.1666 90.5391H18.6666V6.53906H74.1666C75.3597 6.54045 76.5034 7.015 77.3471 7.85862C78.1907 8.70223 78.6652 9.84601 78.6666 11.0391V86.0391ZM87.6666 17.0391C88.4623 17.0391 89.2253 17.3551 89.7879 17.9177C90.3505 18.4804 90.6666 19.2434 90.6666 20.0391C90.6666 20.8347 90.3505 21.5978 89.7879 22.1604C89.2253 22.723 88.4623 23.0391 87.6666 23.0391H81.6666V17.0391H87.6666ZM88.5454 53.0391L86.6059 54.9784C86.4666 55.1177 86.3561 55.283 86.2808 55.465C86.2054 55.647 86.1666 55.8421 86.1666 56.0391C86.1666 56.2361 86.2054 56.4311 86.2808 56.6131C86.3561 56.7951 86.4666 56.9605 86.6059 57.0998L88.5454 59.0391H81.6666V53.0391H88.5454ZM90.6666 42.5391H81.6666V33.5391H90.6666V42.5391Z" fill="black"/>
            <path d="M59.806 29.0614C58.7463 28.9871 57.6818 29.1 56.6613 29.395C55.9009 27.9313 54.7533 26.7044 53.3435 25.8482C51.9338 24.9919 50.316 24.5391 48.6666 24.5391C47.0172 24.5391 45.3995 24.9919 43.9897 25.8482C42.58 26.7044 41.4324 27.9313 40.672 29.395C38.6441 28.808 36.4744 28.9526 34.5423 29.8035C32.6103 30.6544 31.0388 32.1574 30.1028 34.0497C29.1667 35.942 28.9257 38.1031 29.4218 40.1551C29.9179 42.2071 31.1196 44.0194 32.8167 45.2751C33.115 45.5028 33.3611 45.7917 33.5386 46.1224C33.716 46.4532 33.8206 46.818 33.8453 47.1925L35.1666 63.6004V69.5391C35.1666 69.9369 35.3247 70.3185 35.606 70.5998C35.8873 70.8811 36.2688 71.0391 36.6666 71.0391H60.6666C61.0645 71.0391 61.446 70.8811 61.7273 70.5998C62.0086 70.3185 62.1666 69.9369 62.1666 69.5391V63.6004L63.4879 47.1925C63.5127 46.818 63.6173 46.4532 63.7947 46.1224C63.9721 45.7917 64.2182 45.5028 64.5166 45.2751C65.9956 44.1815 67.104 42.6609 67.6925 40.9181C68.281 39.1753 68.3214 37.2941 67.8082 35.5277C67.295 33.7612 66.2529 32.1945 64.8222 31.0384C63.3914 29.8823 61.6408 29.1923 59.806 29.0614ZM38.1666 68.0391V65.0391H59.1666V68.0391H38.1666ZM62.7321 42.8635C62.0895 43.3458 61.5576 43.9602 61.1721 44.6652C60.7867 45.3703 60.5567 46.1496 60.4975 46.951L59.2825 62.0391H54.6666V53.0391C54.6666 52.6413 54.5086 52.2598 54.2273 51.9784C53.946 51.6971 53.5645 51.5391 53.1666 51.5391C52.7688 51.5391 52.3873 51.6971 52.106 51.9784C51.8247 52.2598 51.6666 52.6413 51.6666 53.0391V62.0391H45.6666V53.0391C45.6666 52.6413 45.5086 52.2598 45.2273 51.9784C44.946 51.6971 44.5645 51.5391 44.1666 51.5391C43.7688 51.5391 43.3873 51.6971 43.106 51.9784C42.8247 52.2598 42.6666 52.6413 42.6666 53.0391V62.0391H38.0508L36.8358 46.9515C36.7766 46.1502 36.5466 45.3708 36.1611 44.6658C35.7757 43.9607 35.2438 43.3464 34.6011 42.864C33.3958 41.9722 32.5681 40.6614 32.281 39.1897C31.9939 37.7181 32.2682 36.1923 33.0499 34.9128C33.8316 33.6333 35.064 32.6929 36.5045 32.2766C37.9449 31.8604 39.489 31.9986 40.8327 32.664C41.0273 32.7607 41.2406 32.8139 41.4578 32.8199C41.675 32.826 41.8909 32.7848 42.0906 32.6993C42.2904 32.6137 42.4691 32.4857 42.6145 32.3242C42.7599 32.1628 42.8684 31.9716 42.9327 31.764C43.3122 30.5401 44.0734 29.4697 45.105 28.7095C46.1366 27.9493 47.3844 27.5392 48.6659 27.5392C49.9473 27.5392 51.1951 27.9493 52.2267 28.7095C53.2583 29.4697 54.0196 30.5401 54.3991 31.764C54.4633 31.9716 54.5719 32.1628 54.7173 32.3242C54.8627 32.4857 55.0414 32.6137 55.2411 32.6993C55.4408 32.7848 55.6568 32.826 55.874 32.8199C56.0912 32.8139 56.3045 32.7607 56.4991 32.664C57.8427 31.9986 59.3868 31.8604 60.8273 32.2766C62.2677 32.6929 63.5002 33.6333 64.2819 34.9128C65.0635 36.1923 65.3378 37.7181 65.0507 39.1897C64.7636 40.6614 63.9359 41.9722 62.7306 42.864L62.7321 42.8635Z" fill="black"/>
            </svg>
          </div>
          <div>
            <h4 className="font-medium">Resep Masakan</h4>
            <p className="text-sm text-gray-600">Menyediakan resep makanan sesuai dengan kebutuhan kalori untuk menunjang tubuh yang ideal</p>
          </div>
        </Link>
        <Link to="news" className="w-full max-w-sm px-5 py-2.5 rounded-lg shadow-md flex items-center gap-x-2 bg-white hover:bg-gray-50">
          <div>
            <svg className="w-16 h-16" width="93" height="97" viewBox="0 0 93 97" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.59653 1.80225H90.8267V95.2758H1.59653V1.80225Z" fill="#EFEFF0"/>
            <path d="M90.8267 96.5391H1.59652C0.898287 96.5391 0.333313 95.9742 0.333313 95.2759V1.80227C0.333313 1.10404 0.898287 0.539062 1.59652 0.539062H90.8267C91.5249 0.539062 92.0899 1.10404 92.0899 1.80227V95.2759C92.0899 95.9742 91.5249 96.5391 90.8267 96.5391ZM2.85973 94.0126H89.5636V3.06548H2.85973V94.0126Z" fill="#4D4D4D"/>
            <path d="M13.8456 29.1576H10.261V10.8615H14.2798L21.6096 23.7053V10.8615H25.1968V29.1576H21.3778L13.8456 15.9733V29.1576ZM28.8703 29.1576V10.8615H42.3431V14.1181H32.6869V18.0063H41.6474V21.1568H32.6869V25.9035H42.7799V29.1576H28.8703ZM49.4015 29.1576L44.3144 10.8615H48.2913L51.3455 24.248H51.3382L53.9632 10.8615H58.0289L60.6762 24.137H60.6812L63.7133 10.8615H67.5768L62.4896 29.1576H58.8506L55.9122 14.7646L53.0405 29.1576H49.4015ZM79.8308 16.3434C79.7617 15.4726 79.3793 14.7892 78.6861 14.2834C77.9879 13.7727 77.08 13.5211 75.9551 13.5211C74.9805 13.5211 74.2256 13.7357 73.6754 14.16C73.1276 14.5868 72.8514 15.1839 72.8514 15.9437C72.8514 16.4915 73.1426 16.9133 73.7125 17.2094C74.2823 17.5128 75.4764 17.8607 77.3143 18.2678C79.9813 18.8648 81.7626 19.5507 82.6656 20.3304C83.561 21.1 84.0101 22.3459 84.0101 24.0482C84.0101 25.7678 83.3342 27.1345 81.9797 28.1387C80.6302 29.1502 78.7922 29.6535 76.483 29.6535C74.1713 29.6535 72.3629 29.1205 71.0554 28.0474C69.7577 26.9742 69.0619 25.4545 68.9681 23.4783H72.6491C72.6885 24.4454 73.0437 25.1954 73.7099 25.711C74.3686 26.2366 75.2988 26.503 76.4805 26.503C77.7017 26.503 78.6491 26.3056 79.3325 25.9108C80.0158 25.5162 80.3613 24.9685 80.3613 24.2727C80.3613 23.5893 80.1145 23.0836 79.6211 22.7579C79.1375 22.4372 78.1113 22.0968 76.5396 21.7489C73.6408 21.1099 71.7017 20.4043 70.7247 19.6493C69.7577 18.9018 69.2692 17.7398 69.2692 16.1509C69.2692 14.3771 69.9131 12.9734 71.1985 11.9273C72.4863 10.8862 74.2232 10.3706 76.4066 10.3706C78.4567 10.3706 80.1244 10.9035 81.4073 11.9816C82.6952 13.0597 83.4107 14.5128 83.5488 16.3434H79.8308Z" fill="#4D4D4D"/>
            <path d="M49.3967 42.936H10.0907C9.39249 42.936 8.82751 42.371 8.82751 41.6728C8.82751 40.9746 9.39249 40.4097 10.0907 40.4097H49.3966C50.0948 40.4097 50.6598 40.9746 50.6598 41.6729C50.6598 42.371 50.0948 42.9361 49.3966 42.9361L49.3967 42.936Z" fill="#4D4D4D"/>
            <path d="M62.5315 41.6729H82.7099V65.0412H62.5315V41.6729Z" fill="#5FD4AF"/>
            <path d="M82.7099 66.3046H62.5316C61.8334 66.3046 61.2684 65.7395 61.2684 65.0414V41.6729C61.2684 40.9746 61.8334 40.4097 62.5316 40.4097H82.7099C83.408 40.4097 83.9731 40.9746 83.9731 41.6729V65.0412C83.9731 65.7394 83.408 66.3044 82.7099 66.3044V66.3046ZM63.7947 63.7782H81.4468V42.9361H63.7947V63.7782Z" fill="#4D4D4D"/>
            <path d="M49.3967 47.7147H10.0907C9.39249 47.7147 8.82751 47.1498 8.82751 46.4517C8.82751 45.7534 9.39249 45.1885 10.0907 45.1885H49.3966C50.0948 45.1885 50.6598 45.7534 50.6598 46.4517C50.6598 47.1498 50.0948 47.7148 49.3966 47.7148L49.3967 47.7147Z" fill="#4D4D4D"/>
            <path d="M49.3967 52.3208H10.0907C9.39249 52.3208 8.82751 51.7559 8.82751 51.0575C8.82751 50.3595 9.39249 49.7944 10.0907 49.7944H49.3966C50.0948 49.7944 50.6598 50.3595 50.6598 51.0576C50.6598 51.7559 50.0948 52.3209 49.3966 52.3209L49.3967 52.3208Z" fill="#4D4D4D"/>
            <path d="M49.3967 57.0996H10.0907C9.39249 57.0996 8.82751 56.5346 8.82751 55.8364C8.82751 55.1381 9.39249 54.5732 10.0907 54.5732H49.3966C50.0948 54.5732 50.6598 55.1382 50.6598 55.8365C50.6598 56.5347 50.0948 57.0997 49.3966 57.0997L49.3967 57.0996Z" fill="#4D4D4D"/>
            <path d="M49.3967 61.8808H10.0907C9.39249 61.8808 8.82751 61.3158 8.82751 60.6176C8.82751 59.9194 9.39249 59.3545 10.0907 59.3545H49.3966C50.0948 59.3545 50.6598 59.9194 50.6598 60.6177C50.6598 61.316 50.0948 61.8809 49.3966 61.8809L49.3967 61.8808Z" fill="#4D4D4D"/>
            <path d="M49.3967 66.6572H10.0907C9.39249 66.6572 8.82751 66.0923 8.82751 65.3941C8.82751 64.6958 9.39249 64.1309 10.0907 64.1309H49.3966C50.0948 64.1309 50.6598 64.6958 50.6598 65.3941C50.6598 66.0923 50.0948 66.6573 49.3966 66.6573L49.3967 66.6572Z" fill="#4D4D4D"/>
            <path d="M49.3967 71.2635H10.0907C9.39249 71.2635 8.82751 70.6987 8.82751 70.0004C8.82751 69.3022 9.39249 68.7373 10.0907 68.7373H49.3966C50.0948 68.7373 50.6598 69.3022 50.6598 70.0004C50.6598 70.6987 50.0948 71.2636 49.3966 71.2636L49.3967 71.2635Z" fill="#4D4D4D"/>
            <path d="M49.3967 76.0423H10.0907C9.39249 76.0423 8.82751 75.4775 8.82751 74.7792C8.82751 74.081 9.39249 73.5161 10.0907 73.5161H49.3966C50.0948 73.5161 50.6598 74.0811 50.6598 74.7793C50.6598 75.4776 50.0949 76.0423 49.3967 76.0423Z" fill="#4D4D4D"/>
            <path d="M49.3967 85.8121H10.0907C9.39249 85.8121 8.82751 85.247 8.82751 84.5489C8.82751 83.8507 9.39249 83.2856 10.0907 83.2856H49.3966C50.0948 83.2856 50.6598 83.8506 50.6598 84.5489C50.6598 85.2471 50.0949 85.8121 49.3967 85.8121Z" fill="#4D4D4D"/>
            <path d="M49.3967 80.996H10.0907C9.39249 80.996 8.82751 80.4311 8.82751 79.7328C8.82751 79.0346 9.39249 78.4697 10.0907 78.4697H49.3966C50.0948 78.4697 50.6598 79.0347 50.6598 79.7329C50.6598 80.4312 50.0949 80.996 49.3967 80.996Z" fill="#4D4D4D"/>
            <path d="M82.9073 76.2246H61.8753C61.1771 76.2246 60.6121 75.6596 60.6121 74.9614C60.6121 74.2631 61.1771 73.6982 61.8753 73.6982H82.9073C83.6056 73.6982 84.1705 74.2632 84.1705 74.9615C84.1705 75.6597 83.6056 76.2246 82.9073 76.2246Z" fill="#4D4D4D"/>
            <path d="M82.9073 81.0209H61.8753C61.1771 81.0209 60.6121 80.456 60.6121 79.7577C60.6121 79.0595 61.1771 78.4946 61.8753 78.4946H82.9073C83.6056 78.4946 84.1705 79.0596 84.1705 79.7578C84.1705 80.4561 83.6056 81.0209 82.9073 81.0209Z" fill="#4D4D4D"/>
            <path d="M82.9073 85.8121H61.8753C61.1771 85.8121 60.6121 85.247 60.6121 84.5489C60.6121 83.8507 61.1771 83.2856 61.8753 83.2856H82.9073C83.6056 83.2856 84.1705 83.8506 84.1705 84.5489C84.1705 85.2471 83.6056 85.8121 82.9073 85.8121Z" fill="#4D4D4D"/>
            <path d="M83.0751 71.4334H62.0456C61.3473 71.4334 60.7823 70.8686 60.7823 70.1703C60.7823 69.4721 61.3473 68.9072 62.0456 68.9072H83.0751C83.7732 68.9072 84.3383 69.4721 84.3383 70.1703C84.3383 70.8686 83.7732 71.4335 83.0751 71.4335V71.4334Z" fill="#4D4D4D"/>
            </svg>
          </div>
          <div>
            <h4 className="font-medium">Berita</h4>
            <p className="text-sm text-gray-600">Berita terkini terkait dengan kesehatan, olahraga, diet, dan banyak hal lainnya di bidang kesehatan</p>
          </div>
        </Link>
      </section>
    </main>
  );
}

export default Index;