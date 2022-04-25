import React from 'react' 

const Abort = () => {
  return (
    <div className="error-area">
    <div className="d-table">
      <div className="d-table-cell">
        <div className="container">
          <div className="error-content">
          <h1>404</h1>
            <h2>Hata! Sayfa bulunamadı!</h2>
            <p>Aradığınız sayfa mevcut değil. Taşınmış veya silinmiş olabilir.</p>
            <div className="button">
              <a href="index.html" className="btn">Ana Sayfa</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Abort