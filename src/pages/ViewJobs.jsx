import React from 'react'

export default function ViewJobs() {
  let url= ""
  return (
    <div className='main'>
      <div className='container__card'>
        <div className='card'>
          <div className='card_header'>
            <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" class="card__image" width="600"/>
          </div>
          <div className='card__body'>
            <span className='tag tag-blue'>Front End</span>
            <h4>React Developper</h4>
            <p>Requeriento de un desarrollador web frontend que domine react</p>   
          </div>

          <div className='card__footer'>
            <div className='user'>
              <img src="https://i.pravatar.cc/40?img=1" alt="user__image" class="user__image"/>
              <div class="user__info">
                <h5>Jane Doe</h5>
                <small>2h ago</small>
              </div>
            </div>

            <div className='btn_postular'>
              <a className='btn_primary' href={url}>Postular</a>
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card_header'>
            <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" class="card__image" width="600"/>
          </div>
          <div className='card__body'>
            <span className='tag tag-blue'>Front End</span>
            <h4>React Developper</h4>
            <p>Requeriento de un desarrollador web frontend que domine react</p>   
          </div>

          <div className='card__footer'>
            <div className='user'>
              <img src="https://i.pravatar.cc/40?img=1" alt="user__image" class="user__image"/>
              <div class="user__info">
                <h5>Innova Bolivia</h5>
                <small>2h ago</small>
              </div>
            </div>

            <div className='btn_postular'>
              <a className='btn_primary' href={url}>Postular</a>
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card_header'>
            <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" class="card__image" width="600"/>
          </div>
          <div className='card__body'>
            <span className='tag tag-blue'>Front End</span>
            <h4>React Developper</h4>
            <p>Requeriento de un desarrollador web frontend que domine react</p>   
          </div>

          <div className='card__footer'>
            <div className='user'>
              <img src="https://i.pravatar.cc/40?img=1" alt="user__image" class="user__image"/>
              <div class="user__info">
                <h5>Jane Doe</h5>
                <small>2h ago</small>
              </div>
            </div>

            <div className='btn_postular'>
              <a className='btn_primary' href={url}>Postular</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
