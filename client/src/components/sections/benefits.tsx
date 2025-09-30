import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle,XCircle,X  } from "lucide-react";

export function Benefits() {
    return (
        <section className="pt-12 pb-8 bg-slate-50 relative">
            <div className="container mx-auto px-4">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-center text-foreground mb-12">Traditional vs Automated </h2>
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Before */}
                        <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl border-2 border-red-200 relative overflow-hidden">
                            <div className="absolute top-4 right-4 w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center">
                                <AlertCircle className="w-8 h-8 text-red-500" />
                            </div>
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-red-800 mb-2">Traditional Method</h3>
                                <p className="text-red-600 text-sm">Time-consuming and error-prone</p>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4 p-4 bg-white/60 rounded-xl">
                                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                       <X className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-red-800">Manual Calculations</h4>
                                        <p className="text-red-600 text-sm">Days of spreadsheet-based work, leading to a high risk of costly human error and project rework.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 p-4 bg-white/60 rounded-xl">
                                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <X className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-red-800">Manual Drawing & Drafting</h4>
                                        <p className="text-red-600 text-sm">Countless engineering hours lost creating and manually revising every GA, fabrication, and part drawing.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 p-4 bg-white/60 rounded-xl">
                                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <X className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-red-800">Inconsistent Standards</h4>
                                        <p className="text-red-600 text-sm">Designs vary between engineers and projects, leading to quality control issues and manufacturing challenges.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* After */}
                        <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border-2 border-green-200 relative overflow-hidden">
                            <div className="absolute top-4 right-4 w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center">
                                <CheckCircle className="w-8 h-8 text-green-500" />
                            </div>
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-green-800 mb-2">FDES Automation</h3>
                                <p className="text-green-600 text-sm">Fast, accurate, and reliable</p>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4 p-4 bg-white/80 rounded-xl">
                                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <CheckCircle className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-green-800">Instant Calculations</h4>
                                        <p className="text-green-600 text-sm">Generate complete, fully validated calculations from a single set of inputs in minutes, not days.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 p-4 bg-white/80 rounded-xl">
                                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <CheckCircle className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-green-800">On-Demand Drawing Generation</h4>
                                        <p className="text-green-600 text-sm">Automatically produce a complete, manufacturing-ready set of drawings that are always in sync with your model.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 p-4 bg-white/80 rounded-xl">
                                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <CheckCircle className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-green-800">Guaranteed Standardization</h4>
                                        <p className="text-green-600 text-sm">Enforce your company's best practices on every project, ensuring consistent, high-quality output that simplifies manufacturing.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}