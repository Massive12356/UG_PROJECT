
interface Stat {
  label: string;
  value: string | number;
}

const statsData: Stat[] = [
  { label: "Faculty", value: 300 },
  { label: "Students", value: 1205 },
  { label: "Doctors Trained", value: "11,200" },
  { label: "Patients visits per year", value: 300 }
];

const Stats = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div 
              key={index} 
              className="bg-blue-800 p-8 rounded-lg text-center hover:bg-blue-700 transition-colors duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-xl text-white">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;