import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const API_KEY = '2f89e271af8feaefe28c4cc91bf57963';

export default function TvShowDetails() {
  const { id } = useParams();
  const [tvDetails, setTvDetails] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`)
      .then((res) => res.json())
      .then((data) => setTvDetails(data));

    fetch(`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((data) => setRecommendations(data.results.slice(0, 6)));
  }, [id]);

  if (!tvDetails) return <div style={{ padding: '20px', textAlign: 'center' }}>Loading...</div>;

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      {/* القسم الرئيسي بجانب بعض */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '30px', maxWidth: '1100px', margin: '0 auto', background: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', alignItems: 'flex-start' }}>
        <img
          src={`https://image.tmdb.org/t/p/w500${tvDetails.poster_path}`}
          alt={tvDetails.name}
          style={{ width: '250px', height: '370px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold', margin: 0 }}>{tvDetails.name}</h2>
            <span style={{ color: 'red', fontSize: '24px', cursor: 'pointer' }}>♥</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#eab308', marginTop: '10px', fontWeight: 'bold' }}>
            <span>★</span>
            <span style={{ color: '#1f2937' }}>{tvDetails.vote_average?.toFixed(1)} / 10</span>
            <span style={{ color: '#6b7280', fontWeight: 'normal' }}>({tvDetails.vote_count} Reviews)</span>
          </div>

          <p style={{ color: '#4b5563', marginTop: '15px', lineHeight: '1.6' }}>{tvDetails.overview}</p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '15px' }}>
            {tvDetails.genres?.map((genre) => (
              <span key={genre.id} style={{ backgroundColor: '#fef3c7', color: '#92400e', fontSize: '12px', padding: '4px 12px', borderRadius: '20px', fontWeight: '600' }}>
                {genre.name}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '15px', marginTop: '20px', alignItems: 'center' }}>
            {tvDetails.production_companies?.slice(0, 3).map((company) => (
              company.logo_path && (
                <img
                  key={company.id}
                  src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                  alt={company.name}
                  style={{ height: '30px', objectFit: 'contain', opacity: 0.8 }}
                />
              )
            ))}
          </div>
        </div>
      </div>

      {/* الـ Recommendations بشكل أفقي */}
      <div style={{ maxWidth: '1100px', margin: '40px auto 0 auto' }}>
        <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '20px', color: '#1f2937' }}>Recommendations</h3>
        <div style={{ display: 'flex', gap: '15px', overflowX: 'auto', paddingBottom: '10px' }}>
          {recommendations.map((rec) => (
            <Link key={rec.id} to={`/tvshowdetails/${rec.id}`} style={{ minWidth: '160px', maxWidth: '160px', background: '#fff', padding: '10px', borderRadius: '8px', boxShadow: '0 1px 4px rgba(0,0,0,0.1)', textDecoration: 'none' }}>
              <img
                src={`https://image.tmdb.org/t/p/w300${rec.poster_path}`}
                alt={rec.name}
                style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '6px' }}
              />
              <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#1f2937', marginTop: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{rec.name}</h4>
              <p style={{ fontSize: '12px', color: '#6b7280', margin: '4px 0 0 0' }}>{rec.first_air_date?.split('-')[0]}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}