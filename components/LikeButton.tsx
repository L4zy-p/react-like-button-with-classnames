import cx from 'classnames'
import { useState } from "react"

const LikeButton = () => {
  const [liked, setLiked] = useState<boolean>(false)
  const counterLike = 100

  const onClickLikeButton = () => {
    setLiked((prev) => !prev)
  }

  const classLikeButton = cx('like-button', { 'liked': liked })

  return <>
    <div>
      <h2>Like</h2>
    </div>
    <button className={classLikeButton} onClick={onClickLikeButton}>
      Like | <span className={cx('like-counter')}>{liked ? counterLike + 1 : counterLike}</span>
    </button>
    <br />
    <style>{`
        .like-button{
          font-size: 1rem;
          padding: 5px 10px;
          color: #585858;
        }

        .liked{
          font-weight: bold;
          color: #1565c0;
        }
      `}</style>
  </>
}

export default LikeButton