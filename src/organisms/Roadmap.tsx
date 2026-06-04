/**
 * Roadmap Component
 * A timeline-style component for displaying learning or project steps
 */
import type { RoadmapStep } from "../types";
import { cn } from "../lib/cn";

export interface RoadmapProps {
  steps: RoadmapStep[];
}

export default function Roadmap({ steps }: RoadmapProps) {
  return (
    <>
      <h1
        className={cn(
          "text-4xl font-bold mb-16 text-center",
          "bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
        )}
      >
        Learning Roadmap
      </h1>
      <div className="relative w-full max-w-6xl mx-auto py-16">
        <div
          className={cn(
            "absolute left-1/2 top-0 h-full w-1 transform -translate-x-1/2",
            "bg-gradient-to-b from-cyan-500/30 via-purple-500/30 to-cyan-500/30"
          )}
        />
        <div className="space-y-16">
          {steps.map((step, index) => {
            const isLeftAligned = index % 2 === 0;

            return (
              <div key={index} className="relative w-full flex">
                <div
                  className={cn("w-1/2 pr-10", !isLeftAligned && "opacity-0 pointer-events-none")}
                >
                  {isLeftAligned && (
                    <div
                      className={cn(
                        "bg-gray-900 p-6 rounded-lg transition-all",
                        "border border-cyan-500/30 hover:border-cyan-400/60",
                        "shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20"
                      )}
                    >
                      <h3 className="text-xl font-bold text-cyan-300 mb-2">{step.title}</h3>
                      <p className="mt-2 text-gray-400">{step.description}</p>
                      {step.additionalContent}
                    </div>
                  )}
                </div>
                <div
                  className={cn(
                    "absolute left-1/2 top-4 w-6 h-6 rounded-full transform -translate-x-1/2",
                    "bg-gradient-to-br from-cyan-500 to-purple-500",
                    "border-4 border-gray-900 shadow-lg shadow-cyan-500/50"
                  )}
                />
                <div
                  className={cn("w-1/2 pl-10", isLeftAligned && "opacity-0 pointer-events-none")}
                >
                  {!isLeftAligned && (
                    <div
                      className={cn(
                        "bg-gray-900 p-6 rounded-lg transition-all",
                        "border border-purple-500/30 hover:border-purple-400/60",
                        "shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20"
                      )}
                    >
                      <h3 className="text-xl font-bold text-purple-300 mb-2">{step.title}</h3>
                      <p className="mt-2 text-gray-400">{step.description}</p>
                      {step.additionalContent}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
