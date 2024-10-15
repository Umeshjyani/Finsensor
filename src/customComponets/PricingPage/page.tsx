import React from 'react'
const PricingPage = () => {
    return (
        <div><div className="relative mx-auto mt-8 max-w-2xl px-6 pb-8 sm:mt-12 lg:max-w-7xl lg:px-8 lg:pb-0">

            <div aria-hidden="true" className="absolute inset-0 bottom-6 left-8 right-8 top-4 hidden rounded-tl-lg rounded-tr-lg bg-indigo-700 lg:block"></div>

            <div className="relative space-y-6 lg:grid lg:grid-cols-3 lg:space-y-0">
                <div className="rounded-lg bg-indigo-700 px-6 pb-3 pt-6 lg:bg-transparent lg:px-8 lg:pt-12">
                    <div>
                        <h3 className="text-base font-semibold text-white">Starter</h3>
                        <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                            <div className="mt-3 flex items-center">
                                <p className="text-4xl font-bold tracking-tight text-white">$5</p>
                                <div className="ml-4">
                                    <p className="text-sm text-white">USD / mo</p>
                                    <p className="text-sm text-indigo-200">Billed yearly ($56)</p>
                                </div>
                            </div>
                            <a href="#" className="mt-6 inline-block w-full rounded-md border border-transparent bg-white px-8 py-2 text-center text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50 sm:mt-0 sm:w-auto lg:mt-6 lg:w-full">Buy Starter</a>
                        </div>
                    </div>
                    <h4 className="sr-only">Features</h4>
                    <ul role="list" className="mt-7 divide-y divide-indigo-500 divide-opacity-75 border-t border-indigo-500 lg:border-t-0">
                        <li className="flex items-center py-3">
                            <svg className="h-5 w-5 flex-shrink-0 text-indigo-200" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
                            </svg>
                            <span className="ml-4 text-sm font-medium text-white">Basic invoicing</span>
                        </li>

                        <li className="flex items-center py-3">
                            <svg className="h-5 w-5 flex-shrink-0 text-indigo-200" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
                            </svg>
                            <span className="ml-4 text-sm font-medium text-white">Easy to use accounting</span>
                        </li>

                        <li className="flex items-center py-3">
                            <svg className="h-5 w-5 flex-shrink-0 text-indigo-200" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
                            </svg>
                            <span className="ml-4 text-sm font-medium text-white">Mutli-accounts</span>
                        </li>
                    </ul>
                </div>

                <div className="rounded-lg bg-white px-6 pb-3 pt-6 shadow-md ring-2 ring-indigo-700 lg:px-8 lg:pt-12">
                    <div>
                        <h3 className="text-base font-semibold text-indigo-600">Scale</h3>
                        <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                            <div className="mt-3 flex items-center">
                                <p className="text-4xl font-bold tracking-tight text-indigo-600">$19</p>
                                <div className="ml-4">
                                    <p className="text-sm text-gray-700">USD / mo</p>
                                    <p className="text-sm text-gray-500">Billed yearly ($220)</p>
                                </div>
                            </div>
                            <a href="#" className="mt-6 inline-block w-full rounded-md border border-transparent bg-indigo-600 px-8 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-indigo-700 sm:mt-0 sm:w-auto lg:mt-6 lg:w-full">Buy Scale</a>
                        </div>
                    </div>
                    <h4 className="sr-only">Features</h4>
                    <ul role="list" className="mt-7 divide-y divide-gray-200 border-t border-gray-200 lg:border-t-0">
                        <li className="flex items-center py-3">
                            <svg className="h-5 w-5 flex-shrink-0 text-indigo-500" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
                            </svg>
                            <span className="ml-4 text-sm font-medium text-gray-600">Advanced invoicing</span>
                        </li>

                        <li className="flex items-center py-3">
                            <svg className="h-5 w-5 flex-shrink-0 text-indigo-500" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
                            </svg>
                            <span className="ml-4 text-sm font-medium text-gray-600">Easy to use accounting</span>
                        </li>

                        <li className="flex items-center py-3">
                            <svg className="h-5 w-5 flex-shrink-0 text-indigo-500" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
                            </svg>
                            <span className="ml-4 text-sm font-medium text-gray-600">Mutli-accounts</span>
                        </li>

                        <li className="flex items-center py-3">
                            <svg className="h-5 w-5 flex-shrink-0 text-indigo-500" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
                            </svg>
                            <span className="ml-4 text-sm font-medium text-gray-600">Tax planning toolkit</span>
                        </li>

                        <li className="flex items-center py-3">
                            <svg className="h-5 w-5 flex-shrink-0 text-indigo-500" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
                            </svg>
                            <span className="ml-4 text-sm font-medium text-gray-600">VAT &amp; VATMOSS filing</span>
                        </li>

                        <li className="flex items-center py-3">
                            <svg className="h-5 w-5 flex-shrink-0 text-indigo-500" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
                            </svg>
                            <span className="ml-4 text-sm font-medium text-gray-600">Free bank transfers</span>
                        </li>

                    </ul>
                </div>

                <div className="rounded-lg bg-indigo-700 px-6 pb-3 pt-6 lg:bg-transparent lg:px-8 lg:pt-12">
                    <div>
                        <h3 className="text-base font-semibold text-white">Growth</h3>
                        <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                            <div className="mt-3 flex items-center">
                                <p className="text-4xl font-bold tracking-tight text-white">$12</p>
                                <div className="ml-4">
                                    <p className="text-sm text-white">USD / mo</p>
                                    <p className="text-sm text-indigo-200">Billed yearly ($140)</p>
                                </div>
                            </div>
                            <a href="#" className="mt-6 inline-block w-full rounded-md border border-transparent bg-white px-8 py-2 text-center text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50 sm:mt-0 sm:w-auto lg:mt-6 lg:w-full">Buy Growth</a>
                        </div>
                    </div>
                    <h4 className="sr-only">Features</h4>
                    <ul role="list" className="mt-7 divide-y divide-indigo-500 divide-opacity-75 border-t border-indigo-500 lg:border-t-0">
                        <li className="flex items-center py-3">
                            <svg className="h-5 w-5 flex-shrink-0 text-indigo-200" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
                            </svg>
                            <span className="ml-4 text-sm font-medium text-white">Basic invoicing</span>
                        </li>

                        <li className="flex items-center py-3">
                            <svg className="h-5 w-5 flex-shrink-0 text-indigo-200" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
                            </svg>
                            <span className="ml-4 text-sm font-medium text-white">Easy to use accounting</span>
                        </li>

                        <li className="flex items-center py-3">
                            <svg className="h-5 w-5 flex-shrink-0 text-indigo-200" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
                            </svg>
                            <span className="ml-4 text-sm font-medium text-white">Mutli-accounts</span>
                        </li>

                        <li className="flex items-center py-3">
                            <svg className="h-5 w-5 flex-shrink-0 text-indigo-200" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
                            </svg>
                            <span className="ml-4 text-sm font-medium text-white">Tax planning toolkit</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}

export default PricingPage