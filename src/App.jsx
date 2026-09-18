import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Github, Terminal, BookOpen, Cpu, Zap, Layers, ArrowRight, ExternalLink, Download, Code, Database, TrendingUp, Sparkles, BarChart3, Film, Layout, LineChart, Rocket, FileText, Quote } from 'lucide-react';

// The documentation site is built from the OpenDPD repository (docs/ + mkdocs.yml) and deployed to GitHub Pages.
const DOCS_URL = 'https://lab-emi.github.io/OpenDPD/';
const docsPage = (path) => `${DOCS_URL}${path}`;

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
          <div className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-400">
            <a href="#whats-new" className="hover:text-white transition-colors">What's New</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#performance" className="hover:text-white transition-colors">Performance</a>
            <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
            <a href="#datasets" className="hover:text-white transition-colors">Datasets</a>
            <a href="#research" className="hover:text-white transition-colors">Research</a>
            <a href="#docs" className="hover:text-white transition-colors">Docs</a>
            <a href="https://github.com/Lab-EMI/OpenDPD" target="_blank" rel="noopener noreferrer" className="text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors flex items-center gap-2">
              <Github size={16} />
              GitHub
            </a>
          </div>
          <a href="/studio/" className="shrink-0 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-4 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-200 transition-colors">
            Try Studio <ArrowRight size={16} />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] -z-10" />
        <div className="container mx-auto max-w-5xl text-center">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-5 text-sm font-semibold tracking-wide text-cyan-300">OpenDPD 2.2.16 · Available in your browser</p>
            <img src={`${import.meta.env.BASE_URL}opendpd-studio-logo-inverse.svg`} alt="OpenDPD Studio" className="mx-auto mb-8 w-full max-w-lg" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Train a digital predistorter.<br />
              <span className="text-gradient">See it learn. In your browser.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Choose signal presets, inspect real or complex signals, and simulate a Virtual PA to create a training dataset. Model a power amplifier and train DPD on shared CUDA compute,
              inspect live plots and download your model. No installation needed to try OpenDPD Studio.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a href="/studio/" className="flex items-center gap-3 bg-cyan-300 hover:bg-cyan-200 text-slate-950 px-8 py-4 rounded-xl text-lg font-bold transition-colors shadow-lg shadow-cyan-900/30">
                <Layout size={18} />
                Try OpenDPD Studio <ArrowRight size={20} />
              </a>
              <a
                href="https://colab.research.google.com/drive/1o5X8hztWyMKaMhPs2gUf2fZABCq2nUjn?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Terminal size={18} />
                Try in Colab
              </a>
              <a
                href={DOCS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <BookOpen size={18} />
                Read the Docs
              </a>
            </div>
            <p className="mt-5 text-sm text-slate-400">Trial workspaces · Cleared after 2 hours of IP inactivity · Download results to keep them</p>
            <a href="/studio/" className="mt-10 block overflow-hidden rounded-2xl border border-white/15 bg-slate-900 p-2 text-left shadow-2xl transition-colors hover:border-cyan-300/70 focus-visible:outline focus-visible:outline-4 focus-visible:outline-cyan-300" aria-label="Try OpenDPD Studio from this screenshot">
              <img src={`${import.meta.env.BASE_URL}studio-signal-generator.png`} alt="OpenDPD Studio preset matrices — compare bandwidth, QAM and channel count" className="w-full rounded-xl" />
              <span className="flex items-center justify-between px-4 py-4 font-semibold text-cyan-200">Open the interactive Studio <ArrowRight size={20} /></span>
            </a>
            <p className="mt-7 text-sm text-slate-400">Prefer to run locally? <code className="ml-1 rounded-md bg-slate-900 px-3 py-2 text-slate-200">uv pip install "opendpd==2.2.16" --torch-backend=auto</code></p>
          </Motion.div>
        </div>
      </section>

      {/* OpenDPD 2.2.16 */}
      <section id="whats-new" className="py-24 px-6 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full">New Release</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">OpenDPD 2.2.16: named datasets and clearer workflows</h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
              Generate and preview signals in separate pages, name your input/output datasets, and select dataset members in Analyzer.
              Clearer plots, searchable collections and a prominent training action guide the next step.
              TRes-GRU, batch size 16 and valid-sample ACLR remain the defaults.
            </p>
          </Motion.div>

          {/* GIF Animation Showcase */}
          <Motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-2 mb-12"
          >
            <img
              src={`${import.meta.env.BASE_URL}overview_test.gif`}
              alt="DPD training animation showing PSD, AM/AM, AM/PM, constellation, and waveform evolving across 100 epochs"
              className="rounded-xl w-full"
            />
            <p className="text-center text-slate-400 text-sm mt-3 mb-2">
              GRU-based DPD learning to linearize a 200 MHz wideband PA over 100 epochs — spectral regrowth is suppressed in real time.
            </p>
          </Motion.div>

          {/* V2.1 Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <V21FeatureCard
              icon={<BarChart3 className="text-blue-400" size={20} />}
              title="Signal Preset Matrices"
              description="Compare bandwidth, QAM and OFDMA channel counts at a glance. Select up to 16 presets with independent sample rates and capture lengths."
            />
            <V21FeatureCard
              icon={<Film className="text-purple-400" size={20} />}
              title="Automatic PA Datasets"
              description="Simulate a Virtual PA and go straight to dataset details. Each capture retains its own input, output, metadata and train/validation/test split."
            />
            <V21FeatureCard
              icon={<Layout className="text-green-400" size={20} />}
              title="Portable Capture Exports"
              description="Download one CSV or a multi-preset ZIP with JSON metadata and parameterized Python equations to replay the PA simulation independently."
            />
            <V21FeatureCard
              icon={<LineChart className="text-amber-400" size={20} />}
              title="Training Curves"
              description="Loss, ACLR, EVM, and NMSE convergence curves plotted automatically at the end of training."
            />
            <V21FeatureCard
              icon={<Layers className="text-rose-400" size={20} />}
              title="Comparison Plots"
              description="New --step plot command for side-by-side comparison of PA output without DPD vs. with DPD."
            />
            <V21FeatureCard
              icon={<Sparkles className="text-cyan-400" size={20} />}
              title="OFDM Demodulator"
              description="Built-in demodulator module for constellation diagram generation with per-dataset signal configurations."
            />
          </div>

          {/* Code Example */}
          <div className="glass-panel p-6 max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Code size={18} className="text-blue-400" />
              <span className="text-sm font-semibold text-slate-300">Enable with a single flag</span>
            </div>
            <div className="bg-slate-950 rounded-lg p-4 font-mono text-sm text-slate-300 space-y-2 break-words">
              <div><span className="text-slate-500"># CLI</span></div>
              <div><span className="text-blue-400">$</span> python main.py --step train_dpd --dataset_name DPA_200MHz <span className="text-green-400">--plot</span> --accelerator cuda</div>
              <div className="mt-4"><span className="text-slate-500"># Python API</span></div>
              <div><span className="text-purple-400">import</span> opendpd</div>
              <div>opendpd.train_dpd(dataset_name=<span className="text-amber-400">'DPA_200MHz'</span>, n_epochs=<span className="text-amber-400">100</span>, <span className="text-green-400">plot=True</span>)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-6">
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
                <h3 className="text-xl font-bold">OpenDPDv2 Results (APA_200MHz)</h3>
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
                <h3 className="text-xl font-bold">OpenDPDv1 Results (DPA_200MHz)</h3>
              </div>
              <div className="space-y-4">
                <MetricItem label="Model" value="DGRU" />
                <MetricItem label="Parameters" value="486" />
                <MetricItem label="ACPR" value="-47.8 dBc" />
                <MetricItem label="EVM" value="-35.2 dB" />
              </div>
            </div>
          </div>
          <p className="text-center text-slate-400 text-sm">
            Results on APA_200MHz dataset (GaN Doherty PA @ 3.5 GHz, 41.5 dBm average output power)
          </p>
          <p className="text-center text-sm mt-4">
            <a href={docsPage('benchmark/')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
              <BarChart3 size={16} />
              Full PA modeling and DPD benchmark: MP, GMP, GRU, TRes-GRU and TRes-DeltaGRU with methodology and evidence
              <ArrowRight size={14} />
            </a>
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
              <a
                href={docsPage('training/')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-colors ml-0 md:ml-4 mt-4 md:mt-0"
              >
                <BookOpen size={18} />
                Training Guide
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
          <p className="text-center text-sm mt-8">
            <a href={docsPage('datasets/')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
              <Database size={16} />
              CSV format, spec.json reference and how to add a PA of your own
              <ArrowRight size={14} />
            </a>
          </p>
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
                  <div className="mt-1">uv pip install opendpd --torch-backend=auto</div>
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

      {/* Documentation Section */}
      <section id="docs" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Documentation</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Installation, the end-to-end workflow, datasets, the benchmark and the Python API, kept in sync with the repository.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <DocCard
              icon={<Rocket className="text-blue-400" size={20} />}
              title="Installation"
              description="Install uv, create a Python environment, and install OpenDPD with native GUI and PyTorch dependencies."
              href={docsPage('install/')}
            />
            <DocCard
              icon={<Layers className="text-purple-400" size={20} />}
              title="End-to-End Training"
              description="PA modeling, DPD learning, quantization-aware training and validation, step by step."
              href={docsPage('training/')}
            />
            <DocCard
              icon={<Database className="text-green-400" size={20} />}
              title="Datasets"
              description="The built-in measured datasets, their format, and adding a custom PA."
              href={docsPage('datasets/')}
            />
            <DocCard
              icon={<BarChart3 className="text-amber-400" size={20} />}
              title="Benchmark"
              description="PA modeling and DPD results across model families, with methodology and evidence."
              href={docsPage('benchmark/')}
            />
            <DocCard
              icon={<FileText className="text-rose-400" size={20} />}
              title="API Reference"
              description="train_pa, train_dpd, run_dpd, plot_dpd and the dataset helpers, from the docstrings."
              href={docsPage('api/')}
            />
            <DocCard
              icon={<Quote className="text-cyan-400" size={20} />}
              title="About and Citation"
              description="The papers behind OpenDPD, the measurement setup and the contributors."
              href={docsPage('about/')}
            />
          </div>
          <div className="text-center">
            <a
              href={DOCS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-medium transition-colors text-lg"
            >
              <BookOpen size={20} />
              Open the Documentation
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
          <p className="text-center text-sm mt-8">
            <a href={docsPage('about/')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
              <Quote size={16} />
              How to cite OpenDPD (BibTeX entries)
              <ArrowRight size={14} />
            </a>
          </p>
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
            <a href={DOCS_URL} className="hover:text-white transition-colors">Documentation</a>
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

function V21FeatureCard({ icon, title, description }) {
  return (
    <div className="glass-panel p-6 hover:bg-white/10 transition-colors duration-300">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-white/5 rounded-lg">{icon}</div>
        <h3 className="font-bold">{title}</h3>
      </div>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function DocCard({ icon, title, description, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block group">
      <div className="glass-panel p-6 h-full group-hover:bg-white/10 group-hover:border-blue-500/30 transition-all">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/5 rounded-lg">{icon}</div>
            <h3 className="font-bold group-hover:text-blue-400 transition-colors">{title}</h3>
          </div>
          <ExternalLink size={16} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>
    </a>
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
