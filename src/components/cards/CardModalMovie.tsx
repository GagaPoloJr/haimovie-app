import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { POSTER_PATH_URL } from '@/configs/config';
import { getGenreNames } from '@/libs/genre';
import { convertRating } from '@/libs/rating';
import { modalProps, movieProps } from '@/types/types';

const badgeMediaType = (mediaType: string) => {
  const badge = mediaType === 'tv' ? 'bg-blue-500' : 'bg-yellow-500';
  return (
    <span className={`${badge} px-5 py-2 rounded-lg text-white capitalize font-bold`}>
      {mediaType}
    </span>
  );
};

const CardModalMovie = ({
  isOpen,
  handleCloseModal,
  movie,
}: modalProps & { movie?: movieProps }) => {
  let timeOutId;

  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const checkIsClickOutside = (e: any) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleCloseModal();
      }
    };

    // to handle the useEffect running before the modal is opened
    if (isOpen) {
      timeOutId = setTimeout(() => {
        document.addEventListener('click', checkIsClickOutside);
      }, 0);
    }
    return () => {
      clearTimeout(timeOutId);
      document.removeEventListener('click', checkIsClickOutside);
    };
  }, [handleCloseModal]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div
            style={{ zIndex: 9999 }}
            id="defaultModal"
            tabIndex={-1}
            aria-hidden="true"
            className="fixed top-0 left-0 right-0  flex items-center justify-center h-screen p-10  transition-all duration-300"
          >
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,

                transition: {
                  ease: 'easeOut',
                  duration: 0.15,
                },
              }}
              exit={{
                opacity: 0,
                transition: {
                  ease: 'easeIn',
                  duration: 0.15,
                },
              }}
            >
              <div
                style={{ zIndex: 9998 }}
                className="overlay bg-slate-900 w-full h-full absolute opacity-80 top-0 bottom-0 left-0"
              ></div>
            </motion.div>
            <div style={{ zIndex: 9999 }} className="transform transition-all duration-300">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.75,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    ease: 'easeOut',
                    duration: 0.15,
                  },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.75,
                  transition: {
                    ease: 'easeOut',
                    duration: 0.15,
                  },
                }}
              >
                <div className="max-w-[900px] h-[400px] md:h-full overflow-y-scroll  m-0  mx-auto rounded-md bg-white dark:bg-slate-800">
                  <div className="wrapper-content" ref={modalRef}>
                    <div className="flex items-start justify-between p-1 md:p-4 rounded-t dark:border-gray-600">
                      <span></span>
                      <button
                        type="button"
                        onClick={handleCloseModal}
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                        data-modal-hide="defaultModal"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div className="px-6 space-y-6">
                      {badgeMediaType(movie.media_type)}

                      <div className="flex flex-col md:flex-row gap-5">
                        <div className="w-full md:w-1/3 flex overflow-hidden">
                          <img
                            alt="movie poster"
                            src={`${POSTER_PATH_URL}${movie.poster_path}`}
                            className="rounded-lg h-[180px] md:h-[300px]  w-full object-cover"
                          />
                        </div>
                        <div className="w-full md:w-2/3">
                          <div className=" mb-5">
                            <div className="flex gap-2">
                              <h3 className="text-2xl font-bold dark:text-white">
                                {' '}
                                {movie.title || movie.name}{' '}
                              </h3>
                              <span className="flex mt-2 text-xs gap-1 dark:text-white">
                                <img className="w-4 h-4" src="../../rating.svg" alt="" />
                                {movie.vote_average
                                  ? convertRating(movie.vote_average)
                                  : 'No Rating Vote'}
                              </span>
                            </div>
                            <div className="dark:text-gray-400">
                              {getGenreNames(movie.media_type, movie.genre_ids)}
                            </div>
                          </div>
                          <p className="dark:text-slate-300">{movie.overview}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center p-6 space-x-2 border-gray-200 rounded-b dark:border-gray-600">
                      <Link
                        to={`/movies/${movie.id}`}
                        className="w-full font-bold  focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5  focus:z-10 bg-indigo-800 text-gray-300 border-indigo-600 hover:text-white hover:bg-indigo-950 focus:ring-gray-600"
                      >
                        More Details
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CardModalMovie;
