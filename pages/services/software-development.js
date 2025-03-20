import Layout from "../../components/Layout";
import {
  CommandLineIcon,
  CpuChipIcon,
  CloudIcon,
} from "@heroicons/react/24/outline";

export default function SoftwareDevelopment() {
  return (
    <Layout>
      <div className="bg-black">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-indigo-400 host-semibold tracking-wide uppercase">
              Software Development Services
            </h2>
            <p className="mt-2 text-3xl leading-8 host-bold tracking-tight text-white sm:text-4xl">
              Custom Software Solutions
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-900 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <CommandLineIcon className="h-12 w-12 text-indigo-400" />
                  <h3 className="mt-4 text-lg host-semibold text-white">
                    Custom Applications
                  </h3>
                  <p className="mt-2 text-base host-regular text-gray-300">
                    Tailored software solutions for your specific business
                    needs.
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <CpuChipIcon className="h-12 w-12 text-indigo-400" />
                  <h3 className="mt-4 text-lg host-semibold text-white">
                    System Integration
                  </h3>
                  <p className="mt-2 text-base host-regular text-gray-300">
                    Seamless integration with your existing systems and
                    workflows.
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <CloudIcon className="h-12 w-12 text-indigo-400" />
                  <h3 className="mt-4 text-lg host-semibold text-white">
                    Cloud Solutions
                  </h3>
                  <p className="mt-2 text-base host-regular text-gray-300">
                    Scalable cloud-based applications and services.
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
