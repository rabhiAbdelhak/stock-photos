

const Photo = ({ likes , urls: {regular} , user:{name, portfolio_url , profile_image: {medium}}}) => {
  return (
    <article className='photo_container'>
        <img src={regular} alt='photo_'/>
        <div className='info'>
            <div className='name_stats'>
               <h2>{name}</h2>
               <p><span>{likes}</span>Likes</p>
            </div>
            <a className='btn_portfolio' href={portfolio_url}>
                <img src={medium} alt='portfolio'/>
            </a>
        </div>
    </article>
  )
}

export default Photo