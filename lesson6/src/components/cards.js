import React from 'react';
function Cards({data}) {
    console.log(data)
    const readMore =(url)=>{
        window.open(url)
    }
  return (
    <div className='cardContainer'>
        {data && data.map((curItem)=>{
            if(!curItem.urlToImage){
                return null
            }else{
                return (
                    <div className='card'>
                        <img src={curItem.urlToImage
    } alt= {curItem.title}/>
                        <div className='content'>
                            <a className='title' onClick={()=>window.open(curItem.url)}>{curItem.title}</a>
                            <p>{curItem.description}</p>
                            <button onClick={()=>window.open(curItem.url)}>Read more</button>
                        </div>
                    </div>
                )

            }
        })}
    </div>
  )
}
export default Cards;