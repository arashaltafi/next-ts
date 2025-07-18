"use client"

import 'reactflow/dist/style.css'
import React, { useCallback } from 'react';
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    BackgroundVariant,
    MarkerType,
} from 'reactflow';

//npm install reactflow
const DiagramSample = () => {
    const initialNodes = [
        {
            id: "1",
            type: "input",
            data: {
                label: (
                    <>
                        Welcome to <strong>React Flow!</strong>
                    </>
                )
            },
            position: { x: 250, y: 0 }
        },
        {
            id: "2",
            data: {
                label: (
                    <>
                        This is a <strong>default node</strong>
                    </>
                )
            },
            position: { x: 100, y: 100 }
        },
        {
            id: "3",
            data: {
                label: (
                    <>
                        This one has a <strong>custom style</strong>
                    </>
                )
            },
            position: { x: 400, y: 100 },
            style: {
                background: "#D6D5E6",
                color: "#333",
                border: "1px solid #222138",
                width: 180
            }
        },
        {
            id: "4",
            position: { x: 250, y: 200 },
            data: {
                label: "Another default node"
            }
        },
        {
            id: "5",
            data: {
                label: "Node id: 5"
            },
            position: { x: 250, y: 325 }
        },
        {
            id: "6",
            type: "output",
            data: {
                label: (
                    <>
                        An <strong>output node</strong>
                    </>
                )
            },
            position: { x: 100, y: 480 }
        },
        {
            id: "7",
            type: "output",
            data: { label: "Another output node" },
            position: { x: 400, y: 450 }
        }
    ];

    const initialEdges = [
        {
            id: "e1-2",
            source: "1",
            target: "2",
            label: "this is an edge label"
        },
        {
            id: "e1-3",
            source: "1",
            target: "3"
        },
        {
            id: "e3-4",
            source: "3",
            target: "4",
            animated: true,
            label: "animated edge"
        },
        {
            id: "e4-5",
            source: "4",
            target: "5",
            label: "edge with arrow head",
            markerEnd: {
                type: MarkerType.ArrowClosed
            }
        },
        {
            id: "e5-6",
            source: "5",
            target: "6",
            type: "smoothstep",
            label: "smooth step edge"
        },
        {
            id: "e5-7",
            source: "5",
            target: "7",
            type: "step",
            style: { stroke: "#f6ab6c" },
            label: "a step edge",
            animated: true,
            labelStyle: { fill: "#f6ab6c", fontWeight: 700 }
        }
    ];

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params: any) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );

    const onInit = (reactFlowInstance: any) => {
        console.log("flow loaded:", reactFlowInstance);
    }

    return (
        <div className='flex flex-col gap-16 items-center justify-center w-full h-screen'>
            <h1 className='text-5xl'>DiagramSample</h1>

            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onInit={onInit}
                fitView
                attributionPosition="top-right"
            >
                <Controls />
                <MiniMap />
                <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
            </ReactFlow>
        </div>
    )
}

export default DiagramSample