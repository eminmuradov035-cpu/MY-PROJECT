import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const NotFound = () => {
  const navigate = useNavigate()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className='w-full h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center overflow-hidden relative'>
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob'></div>
        <div className='absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000'></div>
        <div className='absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000'></div>
      </div>

      {/* Content */}
      <div className='relative z-10 text-center px-6'>
        {/* Animated 404 Text */}
        <div className='mb-8'>
          <h1 className='text-9xl font-black bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 drop-shadow-2xl animate-pulse'>
            4
            <span className='inline-block animate-bounce' style={{ animationDelay: '0.1s' }}>0</span>
            <span className='inline-block animate-bounce' style={{ animationDelay: '0.2s' }}>4</span>
          </h1>
        </div>

        {/* Main message */}
        <h2 className='text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in'>
          Səhifə Tapılmadı
        </h2>
        
        <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-md mx-auto animate-fade-in' style={{ animationDelay: '0.2s' }}>
          Üzr istəyirəm! Axtardığınız səhifə mövcud deyil və ya silinib.
        </p>

        {/* Animated illustration */}
        <div className='mb-12 animate-float'>
          <div className='text-8xl'>🔍</div>
        </div>

        {/* Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <button
            onClick={() => navigate('/')}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className='px-8 py-4 bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95'
          >
            Əsas Səhifəyə Qayıt
          </button>

          <button
            onClick={() => navigate(-1)}
            className='px-8 py-4 border-2 border-purple-400 text-purple-300 font-bold rounded-lg text-lg hover:bg-purple-400/10 transition-all duration-300 transform hover:scale-105 active:scale-95'
          >
            Geri Dön
          </button>
        </div>

        {/* Fun message */}
        <p className='mt-12 text-gray-400 text-sm animate-fade-in' style={{ animationDelay: '0.4s' }}>
          💡 İpucu: Naviqasiya menüsünü yoxlayın
        </p>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}

export default NotFound