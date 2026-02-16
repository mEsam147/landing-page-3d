'use client'

import clsx from 'clsx'

const CircleText = ({ textColor = '#D2B48C', backgroundColor = 'transparent', className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      // أضفنا كلاس "group" للسماح للأجزاء الداخلية بالتفاعل مع الـ hover على الـ SVG بالكامل
      className={clsx(
        'circle-text w-full h-full group cursor-pointer transition-transform duration-500 hover:scale-110',
        className
      )}
      aria-labelledby="circle-text-title"
    >
      <title id="circle-text-title">Pure Roast Coffee - Freshly Brewed</title>

      <defs>
        <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />

        <style>{`
          /* دوران هادئ في الحالة العادية */
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .spinning-text {
            animation: spin 10s linear infinite;
            transform-origin: center;
            transition: animation-duration 0.5s ease-in-out;
          }
          /* تسريع الدوران عند الـ Hover */
          .group:hover .spinning-text {
            animation-duration: 4s;
          }
          /* حركة النبض للأيقونة */
          .coffee-bean {
            transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            transform-origin: center;
          }
          .group:hover .coffee-bean {
            transform: scale(1.3) rotate(15deg);
            fill: #fff; /* تفتيح اللون عند الـ hover */
          }
        `}</style>
      </defs>

      <circle cx="50" cy="50" r="48" fill={backgroundColor} />

      {/* النص الدائري مع كلاس الدوران */}
      <g className="spinning-text">
        <text
          fill={textColor}
          className="font-bold uppercase tracking-[0.2em] text-[11px] transition-colors duration-500 group-hover:fill-white"
        >
          <textPath xlinkHref="#circlePath">
            Freshly Roasted • Specialty Coffee • Pure Roast •
          </textPath>
        </text>
      </g>

      {/* أيقونة حبة القهوة في المنتصف */}
      <path
        fill={textColor}
        className="coffee-bean opacity-80"
        d="M50 35c-5.5 0-10 4.5-10 10 0 8 10 16 10 16s10-8 10-16c0-5.5-4.5-10-10-10zm0 13c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"
      />
    </svg>
  )
}

export default CircleText
