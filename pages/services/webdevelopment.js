import Layout from "../../components/Layout";
import {
  CodeBracketIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function WebDevelopment() {
  return (
    <Layout>
      <div className="bg-black">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-indigo-400 host-semibold tracking-wide uppercase">
              Web Development Services
            </h2>
            <p className="mt-2 text-3xl leading-8 host-bold tracking-tight text-white sm:text-4xl">
              Building Powerful Web Applications
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-900 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <CodeBracketIcon className="h-12 w-12 text-indigo-400" />
                  <h3 className="mt-4 text-lg host-semibold text-white">
                    Frontend Development
                  </h3>
                  <p className="mt-2 text-base host-regular text-gray-300">
                    Modern, responsive, and interactive user interfaces.
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <ServerIcon className="h-12 w-12 text-indigo-400" />
                  <h3 className="mt-4 text-lg host-semibold text-white">
                    Backend Development
                  </h3>
                  <p className="mt-2 text-base host-regular text-gray-300">
                    Scalable and robust server-side solutions.
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <ShieldCheckIcon className="h-12 w-12 text-indigo-400" />
                  <h3 className="mt-4 text-lg host-semibold text-white">
                    Security & Performance
                  </h3>
                  <p className="mt-2 text-base host-regular text-gray-300">
                    Secure, optimized, and high-performing applications.
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
