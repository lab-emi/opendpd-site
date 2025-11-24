import React from 'react';
import { motion } from 'framer-motion';
import { Github, Terminal, BookOpen, Cpu, Zap, Layers, ArrowRight, ExternalLink, Download, Code, Database, TrendingUp, CheckCircle2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={`${import.meta.env.BASE_URL}OpenDPDlogo_new.png`} alt="OpenDPD Logo" className="h-8 w-auto" />
            <span className="font-bold text-xl tracking-tight">OpenDPD</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#performance" className="hover:text-white transition-colors">Performance</a>
            <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
            <a href="#datasets" className="hover:text-white transition-colors">Datasets</a>
            <a href="#research" className="hover:text-white transition-colors">Research</a>
            <a href="https://github.com/Lab-EMI/OpenDPD" target="_blank" rel="noopener noreferrer" className="text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors flex items-center gap-2">
              <Github size={16} />
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] -z-10" />
        <div className="container mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              End-to-End Learning for <br />
              <span className="text-gradient">Power Amplifiers</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              An open-source PyTorch framework for modeling power amplifiers and digital pre-distortion.
              Built for researchers, by researchers.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 font-mono text-sm text-slate-300">
                <span className="text-blue-400">$</span> pip install opendpd
              </div>
              <a
                href="https://colab.research.google.com/drive/1o5X8hztWyMKaMhPs2gUf2fZABCq2nUjn?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Terminal size={18} />
                Try in Colab
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Cpu className="text-blue-400" />}
              title="PyTorch Native"
              description="Built entirely in PyTorch, offering seamless integration with the modern deep learning ecosystem."
            />
            <FeatureCard
              icon={<Layers className="text-purple-400" />}
              title="End-to-End Pipeline"
              description="Complete workflow from data acquisition and pre-processing to model training and validation."
            />
            <FeatureCard
              icon={<Zap className="text-amber-400" />}
              title="High Performance"
              description="State-of-the-art DPD algorithms including TRes-DeltaGRU for efficient linearization."
            />
          </div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section id="performance" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">State-of-the-Art Performance</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="glass-panel p-8">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="text-green-400" size={24} />
                <h3 className="text-xl font-bold">OpenDPDv2 Results</h3>
              </div>
              <div className="space-y-4">
                <MetricItem label="Model" value="TRes-DeltaGRU" />
                <MetricItem label="Parameters" value="996" />
                <MetricItem label="ACPR" value="-59.4 dBc" />
                <MetricItem label="EVM" value="-42.1 dB" />
              </div>
            </div>
            <div className="glass-panel p-8">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="text-amber-400" size={24} />
                <h3 className="text-xl font-bold">OpenDPDv1 Results</h3>
              </div>
              <div className="space-y-4">
                <MetricItem label="Model" value="DGRU" />
                <MetricItem label="Parameters" value="1,041" />
                <MetricItem label="ACPR" value="-58.4 dBc" />
                <MetricItem label="EVM" value="-39.1 dB" />
              </div>
            </div>
          </div>
          <p className="text-center text-slate-400 text-sm">
            Results on APA_200MHz dataset (GaN Doherty PA @ 3.5 GHz, 41.5 dBm average output power)
          </p>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="py-24 px-6 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Advanced Architecture</h2>
              <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                OpenDPD provides a modular architecture for experimenting with various backbone networks.
                Version 2 introduces the TRes-DeltaGRU algorithm, enabling fast prototyping of accurate and power-efficient NN-based DPD algorithms.
              </p>
              <ul className="space-y-4 mb-8">
                <ListItem text="Modular backbone system" />
                <ListItem text="Quantization-aware training" />
                <ListItem text="Rich visualization tools" />
                <ListItem text="End-to-end learning pipeline" />
              </ul>
              <a
                href="https://github.com/Lab-EMI/OpenDPD"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Code size={18} />
                View Source Code
                <ArrowRight size={16} />
              </a>
            </div>
            <div className="flex-1">
              <div className="glass-panel p-2">
                <img src={`${import.meta.env.BASE_URL}OpenDPDv2.png`} alt="OpenDPD Architecture" className="rounded-xl w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Datasets Section */}
      <section id="datasets" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Built-in Datasets</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <DatasetCard
              title="APA_200MHz"
              description="GaN Doherty PA @ 3.5 GHz, 41.5 dBm average output power"
              version="OpenDPDv2"
            />
            <DatasetCard
              title="DPA_200MHz"
              description="40nm CMOS DTX @ 2.4 GHz"
              version="OpenDPDv1"
            />
            <DatasetCard
              title="DPA_160MHz"
              description="40nm CMOS DTX @ 2.4 GHz"
              version="OpenDPDv1"
            />
            <DatasetCard
              title="DPA_100MHz"
              description="40nm CMOS DTX @ 2.4 GHz"
              version="OpenDPDv1"
            />
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-24 px-6 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Quick Start</h2>
          <div className="glass-panel p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Download className="text-blue-400" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Installation</h3>
                <div className="bg-slate-950 rounded-lg p-4 font-mono text-sm text-slate-300 mb-4">
                  <div className="text-blue-400">$</div>
                  <div className="mt-1">pip install opendpd</div>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 mb-6">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Terminal className="text-purple-400" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Train PA Model</h3>
                <div className="bg-slate-950 rounded-lg p-4 font-mono text-sm text-slate-300 mb-4">
                  <div className="text-blue-400">$</div>
                  <div className="mt-1">python main.py --dataset_name DPA_200MHz --step train_pa</div>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <Zap className="text-green-400" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Train DPD Model</h3>
                <div className="bg-slate-950 rounded-lg p-4 font-mono text-sm text-slate-300">
                  <div className="text-blue-400">$</div>
                  <div className="mt-1">python main.py --dataset_name DPA_200MHz --step train_dpd</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a
              href="https://colab.research.google.com/drive/1o5X8hztWyMKaMhPs2gUf2fZABCq2nUjn?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-lg font-medium transition-all text-lg"
            >
              <BookOpen size={20} />
              Try Interactive Tutorial
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-24 px-6 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Research & Publications</h2>
          <div className="space-y-6">
            <PaperCard
              title="OpenDPD: An Open-Source End-to-End Learning & Benchmarking Framework"
              venue="ISCAS 2024"
              link="https://ieeexplore.ieee.org/abstract/document/10558162"
            />
            <PaperCard
              title="MP-DPD: Low-Complexity Mixed-Precision Neural Networks"
              venue="IMS/MWTL 2024"
              link="https://ieeexplore.ieee.org/document/10502240"
            />
            <PaperCard
              title="DeltaDPD: Exploiting Dynamic Temporal Sparsity"
              venue="IMS/MWTL 2025"
              link="https://ieeexplore.ieee.org/abstract/document/11006082/"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 bg-slate-950">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-slate-400">
            <img src={`${import.meta.env.BASE_URL}OpenDPDlogo_new.png`} alt="Logo" className="h-6 opacity-50" />
            <span>© 2025 Lab of Efficient Machine Intelligence</span>
          </div>
          <div className="flex gap-6 text-slate-400 text-sm">
            <a href="https://github.com/Lab-EMI/OpenDPD" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.tudemi.com" className="hover:text-white transition-colors">Lab Website</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="glass-panel p-8 hover:bg-white/10 transition-colors duration-300">
      <div className="mb-4 p-3 bg-white/5 rounded-lg w-fit">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}

function ListItem({ text }) {
  return (
    <li className="flex items-center gap-3 text-slate-300">
      <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
      {text}
    </li>
  );
}

function PaperCard({ title, venue, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block group">
      <div className="glass-panel p-6 flex items-center justify-between group-hover:border-blue-500/30 transition-all">
        <div>
          <h3 className="font-semibold text-lg mb-1 group-hover:text-blue-400 transition-colors">{title}</h3>
          <span className="text-sm text-slate-400 bg-slate-800 px-2 py-1 rounded">{venue}</span>
        </div>
        <ExternalLink size={20} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
      </div>
    </a>
  );
}

function MetricItem({ label, value }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
      <span className="text-slate-400">{label}</span>
      <span className="font-bold text-white">{value}</span>
    </div>
  );
}

function DatasetCard({ title, description, version }) {
  return (
    <div className="glass-panel p-6 hover:bg-white/10 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-bold text-lg">{title}</h3>
        <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">{version}</span>
      </div>
      <p className="text-slate-400 text-sm">{description}</p>
    </div>
  );
}

export default App;
