import Layout from "../../components/Layout";
import {
  ComputerDesktopIcon,
  PaintBrushIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

export default function WebDesign() {
  return (
    <Layout>
      <div className="bg-black">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-indigo-400 host-semibold tracking-wide uppercase">
              Web Design Services
            </h2>
            <p className="mt-2 text-3xl leading-8 host-bold tracking-tight text-white sm:text-4xl">
              Creating Beautiful Digital Experiences
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-900 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <ComputerDesktopIcon className="h-12 w-12 text-indigo-400" />
                  <h3 className="mt-4 text-lg host-semibold text-white">
                    Responsive Design
                  </h3>
                  <p className="mt-2 text-base host-regular text-gray-300">
                    Websites that look great on all devices, from desktop to
                    mobile.
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <PaintBrushIcon className="h-12 w-12 text-indigo-400" />
                  <h3 className="mt-4 text-lg host-semibold text-white">
                    UI/UX Design
                  </h3>
                  <p className="mt-2 text-base host-regular text-gray-300">
                    Intuitive interfaces and seamless user experiences.
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <DevicePhoneMobileIcon className="h-12 w-12 text-indigo-400" />
                  <h3 className="mt-4 text-lg host-semibold text-white">
                    Mobile-First Approach
                  </h3>
                  <p className="mt-2 text-base host-regular text-gray-300">
                    Optimized designs that prioritize mobile users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
