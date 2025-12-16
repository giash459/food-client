export function OurMission() {
return (
<section className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="bg-white p-6 rounded-2xl shadow">
<h3 className="text-xl font-semibold">Our Mission</h3>
<p className="mt-3 text-gray-600">Reducing waste and helping communities.</p>
</div>


<div className="bg-white p-6 rounded-2xl shadow">
<h3 className="text-xl font-semibold">Community Stats</h3>
<div className="grid grid-cols-2 gap-4 mt-4">
<div className="bg-gray-50 p-4 rounded">
<div className="text-2xl font-bold">—</div>
<div className="text-xs text-gray-500">Available Items</div>
</div>
<div className="bg-gray-50 p-4 rounded">
<div className="text-2xl font-bold">—</div>
<div className="text-xs text-gray-500">Claims</div>
</div>
</div>
</div>
</section>
);
}