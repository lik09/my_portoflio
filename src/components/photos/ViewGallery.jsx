import React, { useEffect, useState } from 'react';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import { Spin } from 'antd';

const ViewGallery = ({ images = [] }) => {

  const [state, setState] = useState({ loading: true });

  useEffect(() => {
    // simulate loading
    const timer = setTimeout(() => {
      setState({ loading: false });
    }, 1000); // adjust for your real data loading
    return () => clearTimeout(timer);
  }, [images]);

  return (
   <Spin spinning={state.loading}>
    <div>
      <LightGallery
        licenseKey="0000-0000-0000-0000"
        plugins={[lgZoom]}
        mode="lg-fade"
        download={false}
        thumbnail={false}
        galleryId="dynamic-gallery"
        elementClassNames="dynamic-gallery"
      >
        {images.map((img, index) => (
          <a
            key={index}
            href={img.src}
            data-lg-size={`${img.width || 1600}-${img.height || 1200}`}
            data-sub-html={img.subHtml || ''}
            className="dynamic-item"
          >
            <img
              src={img.thumb || img.src}
              alt={`Image ${index + 1}`}
              loading="lazy"
              style={{
                width: '100%',    // fill container width
                height: 'auto',   // auto height to keep aspect ratio
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                marginBottom: 0,
                display: 'block',
                transition: 'transform 0.3s ease',
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/placeholder.jpg';
              }}
            />
          </a>
        ))}
      </LightGallery>

      <style>{`
        .dynamic-gallery {
          column-count:3 ;
          column-gap: 5px;
        }
        @media (max-width: 1200px) {
          .dynamic-gallery { column-count: 3; }
        }
        @media (max-width: 768px) {
          .dynamic-gallery { column-count: 2; }
        }
        @media (max-width: 480px) {
          .dynamic-gallery { column-count: 1; }
        }
        .dynamic-item {
          display: inline-block;
          width: 100%;
          break-inside: avoid;
        }
      `}</style>
    </div>
    </Spin>
  );
};

export default ViewGallery;
