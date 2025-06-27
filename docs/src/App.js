import React from 'react'
import logo from './Jubilee Allianz Logo.svg'  // put your SVG in src/
 
function App() {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      {/* fixed Jubilee logo */}
      <img
        src={logo}
        alt="Jubilee Allianz Logo"
        className="fixed top-4 left-4 h-12 w-auto z-50 select-none"
      />

      <div className="container mx-auto pt-20 sm:pt-24 p-4 sm:p-6 md:p-8 max-w-3xl">
        {/* header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-jubilee">
            Ukaguzi wa Awali wa Gari
          </h1>
          <p className="text-xl text-allianz">Car Pre-Inspection</p>
        </header>

        <main className="space-y-8">
          {[
            {
              key: 'chassis',
              title: 'Picha ya Namba ya Chassis / Chassis Number Photo',
              desc:
                'Piga picha ya sehemu ya chuma iliyoandikwa namba ya chassis. Take a clear photo of the metal-stamped chassis number.',
              img:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuAZEVv5iD0HBjWvCcHMwu5NIXmibc-83YeraB7Vb_S3QjP42vVKru7jyPWsEZTfEo8XmpYr2eGafb6_c8jxYl6BqYqHrFisXy-iibyt6AKI6Mom70SOo1s_2kj9pB-7LoaAk3aXrMstZUZIUyVd3ffmGBV2Qzb_5ZbOxs1srtBslt6Ng981VSY99--lKaPHy92mpCdLLBYUjxwIRt2Uu8j4BHvxd5uaGcNVwnclDXnK3wu_eGxjKHoSXgbFogORKfCr7xBtmjfncrYu'
            },
            {
              key: 'front',
              title: 'Mbele ya Gari / Front Side of Car',
              desc: 'Piga picha ya mbele ya gari ukiwa umbali wa mita 2-3. Take a photo from the front, about 2-3 m away.',
              img:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuB1XIKCypNFUF-4FUdz1cey2iCjAsE1tLKFQROD2w3kPzHwRx0UQoGPPMJ5CvuwCPeVgMyBgXLArDVRMzzDs-a7k_6RMCQkexmgxHXFIH9ANVz3E5kM4PASibSfHvYvlOEou0PIdUo9CoxDzI97hjZOLklunC9VT15TZDIvHl0CMQH3cWK2xB3CiF2Ie0f-ZUD8cAhykMyDK8rb9BB7LboEvBi5znkNbgmG6IuUyZ_45ENAdFu_U3_KNODNsr2T_IoYFbd1Ptq4z4lc'
            },
            {
              key: 'back',
              title: 'Nyuma ya Gari / Back Side of Car',
              desc: 'Piga picha ya nyuma ya gari kwa mtazamo mzima. Take a full-view photo from the back.',
              img:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuCv6_O-y-mYXcokTeaMO0H_l0bgSrEm8o_i_gPZrYjhlfiEUTBMoXnBotB3JA6ciTBn7fCsuJSF8IN2K9TnMzs3ZJtx84dFgbi9CxbPmTSosV7Zntvr8PA_5NJlez7EolAubrl0wIgQ3ao9Gx6FCHET8vP8vQDZZvdPwhVXBAox7uoSRtdYRPAREcLd_EPath5kUARmzYk5dvi-W00bhk7nFtwAPoAbaD1i_pOnRbgVapwlVKfAHaqTFVYXYWTK6G_-Rs_gkffleEEi'
            },
            {
              key: 'left',
              title: 'Upande wa Kushoto / Left Side of Car',
              desc:
                'Piga picha ya upande wa kushoto wa gari ukiwa mbali kiasi. Take a clear left-side photo from a distance.',
              img:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuA9378nvGAzggv-1vVBsyf-LVoNYogRr3neklsOqq1oDzSEjdvS8jZdjxryCvpr2M2ngdUOeQa5C_MZ27VvRIz_IJ0G0SsYlJVinuakYOm58OVl18DgPEwazL4kGiSt5Un3myn0YQ7fwOl1ncos9kUvAs9dT2AcR_mHRCe0zK3DMHaSDwxO648wWUgp6BXQEyIRspPvlWpY8ijWueWQtwdb13cEs9vrGdjCyop32kRP93TnL8sW5x-yV1LwzPXVGbDEdDZUIgAghRlc'
            },
            {
              key: 'right',
              title: 'Upande wa Kulia / Right Side of Car',
              desc:
                'Piga picha ya upande wa kulia wa gari ukiwa mbali kiasi. Take a clear right-side photo from a distance.',
              img:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuDeEmVUHwfJGTkBeOKl5np7FMSSK2hz5B3mLyBlNqizofsvRckb3pc9gwYZ9lfLruqDsK9rYB9HhTHFUApBngq3uMg8BmctTT2W9ceCN8bC8xGrnyyRHwt3v_XBID8ZAiOMIMDUCdCL3UCglPP2eVWqdQruLBLcRDkDtJVlyCPD9GlG1iCUU_qs-ZWKHAXxDjdaI8Pp9WYJSS8kTG8d-YmpDZ1n4prHQxyxVCrFX3tuFVUBZJ4_UoqneB0A927W6XoAeySrwhbu_ofq'
            }
          ].map(({ key, title, desc, img }) => (
            <section key={key} className="bg-white p-6 capture-section">
              <h2 className="text-xl font-semibold text-jubilee mb-2">{title}</h2>
              <p className="text-gray-600 mb-4 text-sm">{desc}</p>

              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <img
                  src={img}
                  alt={title}
                  className="w-48 h-32 object-cover rounded border border-gray-300"
                />
                <button className="flex items-center justify-center bg-allianz hover:bg-allianz-dark text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-150 ease-in-out w-full sm:w-auto">
                  <span className="material-icons mr-2">photo_camera</span>
                  Piga Picha / Capture
                </button>
              </div>
            </section>
          ))}

          {/* Upload All */}
          <div className="mt-10 flex justify-center">
            <button className="flex items-center justify-center bg-jubilee hover:bg-jubilee-dark text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-150 ease-in-out text-lg">
              <span className="material-icons mr-2">cloud_upload</span>
              Upload Picha Zote / Upload All Images
            </button>
          </div>
        </main>

        <footer className="text-center mt-12 py-4 border-t border-gray-300">
          <p className="text-sm text-gray-500">
            © 2025 Jubilee Allianz. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
