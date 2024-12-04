(function() {var type_impls = {
"jumpy":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Add-for-SdpMatrix2%3CN%3E\" class=\"impl\"><a class=\"src rightside\" href=\"http://docs.rs/parry/0.1.1/src/parry2d/utils/sdp_matrix.rs.html#87\">source</a><a href=\"#impl-Add-for-SdpMatrix2%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a> for <a class=\"struct\" href=\"http://docs.rs/parry/0.1.1/parry2d/utils/sdp_matrix/struct.SdpMatrix2.html\" title=\"struct parry2d::utils::sdp_matrix::SdpMatrix2\">SdpMatrix2</a>&lt;N&gt;<div class=\"where\">where\n    N: <a class=\"trait\" href=\"jumpy/core/physics/rapier/nalgebra/trait.SimdRealField.html\" title=\"trait jumpy::core::physics::rapier::nalgebra::SimdRealField\">SimdRealField</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Output\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Output\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.81.0/core/ops/arith/trait.Add.html#associatedtype.Output\" class=\"associatedtype\">Output</a> = <a class=\"struct\" href=\"http://docs.rs/parry/0.1.1/parry2d/utils/sdp_matrix/struct.SdpMatrix2.html\" title=\"struct parry2d::utils::sdp_matrix::SdpMatrix2\">SdpMatrix2</a>&lt;N&gt;</h4></section></summary><div class='docblock'>The resulting type after applying the <code>+</code> operator.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.add\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"http://docs.rs/parry/0.1.1/src/parry2d/utils/sdp_matrix.rs.html#90\">source</a><a href=\"#method.add\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/ops/arith/trait.Add.html#tymethod.add\" class=\"fn\">add</a>(self, rhs: <a class=\"struct\" href=\"http://docs.rs/parry/0.1.1/parry2d/utils/sdp_matrix/struct.SdpMatrix2.html\" title=\"struct parry2d::utils::sdp_matrix::SdpMatrix2\">SdpMatrix2</a>&lt;N&gt;) -&gt; <a class=\"struct\" href=\"http://docs.rs/parry/0.1.1/parry2d/utils/sdp_matrix/struct.SdpMatrix2.html\" title=\"struct parry2d::utils::sdp_matrix::SdpMatrix2\">SdpMatrix2</a>&lt;N&gt;</h4></section></summary><div class='docblock'>Performs the <code>+</code> operation. <a href=\"https://doc.rust-lang.org/1.81.0/core/ops/arith/trait.Add.html#tymethod.add\">Read more</a></div></details></div></details>","Add","jumpy::core::physics::rapier::SdpMatrix"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-SdpMatrix2%3CN%3E\" class=\"impl\"><a class=\"src rightside\" href=\"http://docs.rs/parry/0.1.1/src/parry2d/utils/sdp_matrix.rs.html#9\">source</a><a href=\"#impl-Clone-for-SdpMatrix2%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"http://docs.rs/parry/0.1.1/parry2d/utils/sdp_matrix/struct.SdpMatrix2.html\" title=\"struct parry2d::utils::sdp_matrix::SdpMatrix2\">SdpMatrix2</a>&lt;N&gt;<div class=\"where\">where\n    N: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"http://docs.rs/parry/0.1.1/src/parry2d/utils/sdp_matrix.rs.html#9\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"http://docs.rs/parry/0.1.1/parry2d/utils/sdp_matrix/struct.SdpMatrix2.html\" title=\"struct parry2d::utils::sdp_matrix::SdpMatrix2\">SdpMatrix2</a>&lt;N&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.81.0/src/core/clone.rs.html#172\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","jumpy::core::physics::rapier::SdpMatrix"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-SdpMatrix2%3CN%3E\" class=\"impl\"><a class=\"src rightside\" href=\"http://docs.rs/parry/0.1.1/src/parry2d/utils/sdp_matrix.rs.html#9\">source</a><a href=\"#impl-Debug-for-SdpMatrix2%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"http://docs.rs/parry/0.1.1/parry2d/utils/sdp_matrix/struct.SdpMatrix2.html\" title=\"struct parry2d::utils::sdp_matrix::SdpMatrix2\">SdpMatrix2</a>&lt;N&gt;<div class=\"where\">where\n    N: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"http://docs.rs/parry/0.1.1/src/parry2d/utils/sdp_matrix.rs.html#9\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","jumpy::core::physics::rapier::SdpMatrix"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Mul%3CMatrix%3CN,+Const%3C2%3E,+Const%3C1%3E,+ArrayStorage%3CN,+2,+1%3E%3E%3E-for-SdpMatrix2%3CN%3E\" class=\"impl\"><a class=\"src rightside\" href=\"http://docs.rs/parry/0.1.1/src/parry2d/utils/sdp_matrix.rs.html#95\">source</a><a href=\"#impl-Mul%3CMatrix%3CN,+Const%3C2%3E,+Const%3C1%3E,+ArrayStorage%3CN,+2,+1%3E%3E%3E-for-SdpMatrix2%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"jumpy/core/physics/rapier/nalgebra/struct.Matrix.html\" title=\"struct jumpy::core::physics::rapier::nalgebra::Matrix\">Matrix</a>&lt;N, <a class=\"struct\" href=\"jumpy/core/physics/rapier/nalgebra/struct.Const.html\" title=\"struct jumpy::core::physics::rapier::nalgebra::Const\">Const</a>&lt;2&gt;, <a class=\"struct\" href=\"jumpy/core/physics/rapier/nalgebra/struct.Const.html\" title=\"struct jumpy::core::physics::rapier::nalgebra::Const\">Const</a>&lt;1&gt;, <a class=\"struct\" href=\"jumpy/core/physics/rapier/nalgebra/struct.ArrayStorage.html\" title=\"struct jumpy::core::physics::rapier::nalgebra::ArrayStorage\">ArrayStorage</a>&lt;N, 2, 1&gt;&gt;&gt; for <a class=\"struct\" href=\"http://docs.rs/parry/0.1.1/parry2d/utils/sdp_matrix/struct.SdpMatrix2.html\" title=\"struct parry2d::utils::sdp_matrix::SdpMatrix2\">SdpMatrix2</a>&lt;N&gt;<div class=\"where\">where\n    N: <a class=\"trait\" href=\"jumpy/core/physics/rapier/nalgebra/trait.SimdRealField.html\" title=\"trait jumpy::core::physics::rapier::nalgebra::SimdRealField\">SimdRealField</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Output\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Output\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.81.0/core/ops/arith/trait.Mul.html#associatedtype.Output\" class=\"associatedtype\">Output</a> = <a class=\"struct\" href=\"jumpy/core/physics/rapier/nalgebra/struct.Matrix.html\" title=\"struct jumpy::core::physics::rapier::nalgebra::Matrix\">Matrix</a>&lt;N, <a class=\"struct\" href=\"jumpy/core/physics/rapier/nalgebra/struct.Const.html\" title=\"struct jumpy::core::physics::rapier::nalgebra::Const\">Const</a>&lt;2&gt;, <a class=\"struct\" href=\"jumpy/core/physics/rapier/nalgebra/struct.Const.html\" title=\"struct jumpy::core::physics::rapier::nalgebra::Const\">Const</a>&lt;1&gt;, <a class=\"struct\" href=\"jumpy/core/physics/rapier/nalgebra/struct.ArrayStorage.html\" title=\"struct jumpy::core::physics::rapier::nalgebra::ArrayStorage\">ArrayStorage</a>&lt;N, 2, 1&gt;&gt;</h4></section></summary><div class='docblock'>The resulting type after applying the <code>*</code> operator.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.mul\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"http://docs.rs/parry/0.1.1/src/parry2d/utils/sdp_matrix.rs.html#98\">source</a><a href=\"#method.mul\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/ops/arith/trait.Mul.html#tymethod.mul\" class=\"fn\">mul</a>(\n    self,\n    rhs: <a class=\"struct\" href=\"jumpy/core/physics/rapier/nalgebra/struct.Matrix.html\" title=\"struct jumpy::core::physics::rapier::nalgebra::Matrix\">Matrix</a>&lt;N, <a class=\"struct\" href=\"jumpy/core/physics/rapier/nalgebra/struct.Const.html\" title=\"struct jumpy::core::physics::rapier::nalgebra::Const\">Const</a>&lt;2&gt;, <a class=\"struct\" href=\"jumpy/core/physics/rapier/nalgebra/struct.Const.html\" title=\"struct jumpy::core::physics::rapier::nalgebra::Const\">Const</a>&lt;1&gt;, <a class=\"struct\" href=\"jumpy/core/physics/rapier/nalgebra/struct.ArrayStorage.html\" title=\"struct jumpy::core::physics::rapier::nalgebra::ArrayStorage\">ArrayStorage</a>&lt;N, 2, 1&gt;&gt;,\n) -&gt; &lt;<a class=\"struct\" href=\"http://docs.rs/parry/0.1.1/parry2d/utils/sdp_matrix/struct.SdpMatrix2.html\" title=\"struct parry2d::utils::sdp_matrix::SdpMatrix2\">SdpMatrix2</a>&lt;N&gt; as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"jumpy/core/physics/rapier/nalgebra/struct.Matrix.html\" title=\"struct jumpy::core::physics::rapier::nalgebra::Matrix\">Matrix</a>&lt;N, <a class=\"struct\" href=\"jumpy/core/physics/rapier/nalgebra/struct.Const.html\" title=\"struct jumpy::core::physics::rapier::nalgebra::Const\">Const</a>&lt;2&gt;, <a class=\"struct\" href=\"jumpy/core/physics/rapier/nalgebra/struct.Const.html\" title=\"struct jumpy::core::physics::rapier::nalgebra::Const\">Const</a>&lt;1&gt;, <a class=\"struct\" href=\"jumpy/core/physics/rapier/nalgebra/struct.ArrayStorage.html\" title=\"struct jumpy::core::physics::rapier::nalgebra::ArrayStorage\">ArrayStorage</a>&lt;N, 2, 1&gt;&gt;&gt;&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/arith/trait.Mul.html#associatedtype.Output\" title=\"type core::ops::arith::Mul::Output\">Output</a></h4></section></summary><div class='docblock'>Performs the <code>*</code> operation. <a href=\"https://doc.rust-lang.org/1.81.0/core/ops/arith/trait.Mul.html#tymethod.mul\">Read more</a></div></details></div></details>","Mul<Matrix<N, Const<2>, Const<1>, ArrayStorage<N, 2, 1>>>","jumpy::core::physics::rapier::SdpMatrix"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Mul%3Cf32%3E-for-SdpMatrix2%3Cf32%3E\" class=\"impl\"><a class=\"src rightside\" href=\"http://docs.rs/parry/0.1.1/src/parry2d/utils/sdp_matrix.rs.html#106\">source</a><a href=\"#impl-Mul%3Cf32%3E-for-SdpMatrix2%3Cf32%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.f32.html\">f32</a>&gt; for <a class=\"struct\" href=\"http://docs.rs/parry/0.1.1/parry2d/utils/sdp_matrix/struct.SdpMatrix2.html\" title=\"struct parry2d::utils::sdp_matrix::SdpMatrix2\">SdpMatrix2</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.f32.html\">f32</a>&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Output\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Output\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.81.0/core/ops/arith/trait.Mul.html#associatedtype.Output\" class=\"associatedtype\">Output</a> = <a class=\"struct\" href=\"http://docs.rs/parry/0.1.1/parry2d/utils/sdp_matrix/struct.SdpMatrix2.html\" title=\"struct parry2d::utils::sdp_matrix::SdpMatrix2\">SdpMatrix2</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.f32.html\">f32</a>&gt;</h4></section></summary><div class='docblock'>The resulting type after applying the <code>*</code> operator.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.mul\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"http://docs.rs/parry/0.1.1/src/parry2d/utils/sdp_matrix.rs.html#109\">source</a><a href=\"#method.mul\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/ops/arith/trait.Mul.html#tymethod.mul\" class=\"fn\">mul</a>(self, rhs: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.f32.html\">f32</a>) -&gt; &lt;<a class=\"struct\" href=\"http://docs.rs/parry/0.1.1/parry2d/utils/sdp_matrix/struct.SdpMatrix2.html\" title=\"struct parry2d::utils::sdp_matrix::SdpMatrix2\">SdpMatrix2</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.f32.html\">f32</a>&gt; as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.f32.html\">f32</a>&gt;&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/arith/trait.Mul.html#associatedtype.Output\" title=\"type core::ops::arith::Mul::Output\">Output</a></h4></section></summary><div class='docblock'>Performs the <code>*</code> operation. <a href=\"https://doc.rust-lang.org/1.81.0/core/ops/arith/trait.Mul.html#tymethod.mul\">Read more</a></div></details></div></details>","Mul<f32>","jumpy::core::physics::rapier::SdpMatrix"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-SdpMatrix2%3CN%3E\" class=\"impl\"><a class=\"src rightside\" href=\"http://docs.rs/parry/0.1.1/src/parry2d/utils/sdp_matrix.rs.html#9\">source</a><a href=\"#impl-PartialEq-for-SdpMatrix2%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"http://docs.rs/parry/0.1.1/parry2d/utils/sdp_matrix/struct.SdpMatrix2.html\" title=\"struct parry2d::utils::sdp_matrix::SdpMatrix2\">SdpMatrix2</a>&lt;N&gt;<div class=\"where\">where\n    N: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"http://docs.rs/parry/0.1.1/src/parry2d/utils/sdp_matrix.rs.html#9\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"http://docs.rs/parry/0.1.1/parry2d/utils/sdp_matrix/struct.SdpMatrix2.html\" title=\"struct parry2d::utils::sdp_matrix::SdpMatrix2\">SdpMatrix2</a>&lt;N&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.81.0/src/core/cmp.rs.html#262\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","jumpy::core::physics::rapier::SdpMatrix"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SdpMatrix2%3CN%3E\" class=\"impl\"><a class=\"src rightside\" href=\"http://docs.rs/parry/0.1.1/src/parry2d/utils/sdp_matrix.rs.html#25\">source</a><a href=\"#impl-SdpMatrix2%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N&gt; <a class=\"struct\" href=\"http://docs.rs/parry/0.1.1/parry2d/utils/sdp_matrix/struct.SdpMatrix2.html\" title=\"struct parry2d::utils::sdp_matrix::SdpMatrix2\">SdpMatrix2</a>&lt;N&gt;<div class=\"where\">where\n    N: <a class=\"trait\" href=\"jumpy/core/physics/rapier/nalgebra/trait.SimdRealField.html\" title=\"trait jumpy::core::physics::rapier::nalgebra::SimdRealField\">SimdRealField</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"http://docs.rs/parry/0.1.1/src/parry2d/utils/sdp_matrix.rs.html#29\">source</a><h4 class=\"code-header\">pub fn <a href=\"http://docs.rs/parry/0.1.1/parry2d/utils/sdp_matrix/struct.SdpMatrix2.html#tymethod.new\" class=\"fn\">new</a>(m11: N, m12: N, m22: N) -&gt; <a class=\"struct\" href=\"http://docs.rs/parry/0.1.1/parry2d/utils/sdp_matrix/struct.SdpMatrix2.html\" title=\"struct parry2d::utils::sdp_matrix::SdpMatrix2\">SdpMatrix2</a>&lt;N&gt;</h4></section></summary><div class=\"docblock\"><p>A new SDP 2x2 matrix with the given components.</p>\n<p>Because the matrix is symmetric, only the lower off-diagonal component is required.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_sdp_matrix\" class=\"method\"><a class=\"src rightside\" href=\"http://docs.rs/parry/0.1.1/src/parry2d/utils/sdp_matrix.rs.html#36\">source</a><h4 class=\"code-header\">pub fn <a href=\"http://docs.rs/parry/0.1.1/parry2d/utils/sdp_matrix/struct.SdpMatrix2.html#tymethod.from_sdp_matrix\" class=\"fn\">from_sdp_matrix</a>(\n    mat: <a class=\"struct\" href=\"jumpy/core/physics/rapier/nalgebra/struct.Matrix.html\" title=\"struct jumpy::core::physics::rapier::nalgebra::Matrix\">Matrix</a>&lt;N, <a class=\"struct\" href=\"jumpy/core/physics/rapier/nalgebra/struct.Const.html\" title=\"struct jumpy::core::physics::rapier::nalgebra::Const\">Const</a>&lt;2&gt;, <a class=\"struct\" href=\"jumpy/core/physics/rapier/nalgebra/struct.Const.html\" title=\"struct jumpy::core::physics::rapier::nalgebra::Const\">Const</a>&lt;2&gt;, <a class=\"struct\" href=\"jumpy/core/physics/rapier/nalgebra/struct.ArrayStorage.html\" title=\"struct jumpy::core::physics::rapier::nalgebra::ArrayStorage\">ArrayStorage</a>&lt;N, 2, 2&gt;&gt;,\n) -&gt; <a class=\"struct\" href=\"http://docs.rs/parry/0.1.1/parry2d/utils/sdp_matrix/struct.SdpMatrix2.html\" title=\"struct parry2d::utils::sdp_matrix::SdpMatrix2\">SdpMatrix2</a>&lt;N&gt;</h4></section></summary><div class=\"docblock\"><p>Build an <code>SdpMatrix2</code> structure from a plain matrix, assuming it is SDP.</p>\n<p>No check is performed to ensure <code>mat</code> is actually SDP.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.zero\" class=\"method\"><a class=\"src rightside\" href=\"http://docs.rs/parry/0.1.1/src/parry2d/utils/sdp_matrix.rs.html#45\">source</a><h4 class=\"code-header\">pub fn <a href=\"http://docs.rs/parry/0.1.1/parry2d/utils/sdp_matrix/struct.SdpMatrix2.html#tymethod.zero\" class=\"fn\">zero</a>() -&gt; <a class=\"struct\" href=\"http://docs.rs/parry/0.1.1/parry2d/utils/sdp_matrix/struct.SdpMatrix2.html\" title=\"struct parry2d::utils::sdp_matrix::SdpMatrix2\">SdpMatrix2</a>&lt;N&gt;</h4></section></summary><div class=\"docblock\"><p>Create a new SDP matrix filled with zeros.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.diagonal\" class=\"method\"><a class=\"src rightside\" href=\"http://docs.rs/parry/0.1.1/src/parry2d/utils/sdp_matrix.rs.html#54\">source</a><h4 class=\"code-header\">pub fn <a href=\"http://docs.rs/parry/0.1.1/parry2d/utils/sdp_matrix/struct.SdpMatrix2.html#tymethod.diagonal\" class=\"fn\">diagonal</a>(val: N) -&gt; <a class=\"struct\" href=\"http://docs.rs/parry/0.1.1/parry2d/utils/sdp_matrix/struct.SdpMatrix2.html\" title=\"struct parry2d::utils::sdp_matrix::SdpMatrix2\">SdpMatrix2</a>&lt;N&gt;</h4></section></summary><div class=\"docblock\"><p>Create a new SDP matrix with its diagonal filled with <code>val</code>, and its off-diagonal elements set to zero.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.add_diagonal\" class=\"method\"><a class=\"src rightside\" href=\"http://docs.rs/parry/0.1.1/src/parry2d/utils/sdp_matrix.rs.html#63\">source</a><h4 class=\"code-header\">pub fn <a href=\"http://docs.rs/parry/0.1.1/parry2d/utils/sdp_matrix/struct.SdpMatrix2.html#tymethod.add_diagonal\" class=\"fn\">add_diagonal</a>(&amp;mut self, elt: N) -&gt; <a class=\"struct\" href=\"http://docs.rs/parry/0.1.1/parry2d/utils/sdp_matrix/struct.SdpMatrix2.html\" title=\"struct parry2d::utils::sdp_matrix::SdpMatrix2\">SdpMatrix2</a>&lt;N&gt;</h4></section></summary><div class=\"docblock\"><p>Adds <code>val</code> to the diagonal components of <code>self</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.inverse_unchecked\" class=\"method\"><a class=\"src rightside\" href=\"http://docs.rs/parry/0.1.1/src/parry2d/utils/sdp_matrix.rs.html#72\">source</a><h4 class=\"code-header\">pub fn <a href=\"http://docs.rs/parry/0.1.1/parry2d/utils/sdp_matrix/struct.SdpMatrix2.html#tymethod.inverse_unchecked\" class=\"fn\">inverse_unchecked</a>(&amp;self) -&gt; <a class=\"struct\" href=\"http://docs.rs/parry/0.1.1/parry2d/utils/sdp_matrix/struct.SdpMatrix2.html\" title=\"struct parry2d::utils::sdp_matrix::SdpMatrix2\">SdpMatrix2</a>&lt;N&gt;</h4></section></summary><div class=\"docblock\"><p>Compute the inverse of this SDP matrix without performing any inversibility check.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_matrix\" class=\"method\"><a class=\"src rightside\" href=\"http://docs.rs/parry/0.1.1/src/parry2d/utils/sdp_matrix.rs.html#82\">source</a><h4 class=\"code-header\">pub fn <a href=\"http://docs.rs/parry/0.1.1/parry2d/utils/sdp_matrix/struct.SdpMatrix2.html#tymethod.into_matrix\" class=\"fn\">into_matrix</a>(self) -&gt; <a class=\"struct\" href=\"jumpy/core/physics/rapier/nalgebra/struct.Matrix.html\" title=\"struct jumpy::core::physics::rapier::nalgebra::Matrix\">Matrix</a>&lt;N, <a class=\"struct\" href=\"jumpy/core/physics/rapier/nalgebra/struct.Const.html\" title=\"struct jumpy::core::physics::rapier::nalgebra::Const\">Const</a>&lt;2&gt;, <a class=\"struct\" href=\"jumpy/core/physics/rapier/nalgebra/struct.Const.html\" title=\"struct jumpy::core::physics::rapier::nalgebra::Const\">Const</a>&lt;2&gt;, <a class=\"struct\" href=\"jumpy/core/physics/rapier/nalgebra/struct.ArrayStorage.html\" title=\"struct jumpy::core::physics::rapier::nalgebra::ArrayStorage\">ArrayStorage</a>&lt;N, 2, 2&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Convert this SDP matrix to a regular matrix representation.</p>\n</div></details></div></details>",0,"jumpy::core::physics::rapier::SdpMatrix"],["<section id=\"impl-Copy-for-SdpMatrix2%3CN%3E\" class=\"impl\"><a class=\"src rightside\" href=\"http://docs.rs/parry/0.1.1/src/parry2d/utils/sdp_matrix.rs.html#9\">source</a><a href=\"#impl-Copy-for-SdpMatrix2%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"http://docs.rs/parry/0.1.1/parry2d/utils/sdp_matrix/struct.SdpMatrix2.html\" title=\"struct parry2d::utils::sdp_matrix::SdpMatrix2\">SdpMatrix2</a>&lt;N&gt;<div class=\"where\">where\n    N: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</div></h3></section>","Copy","jumpy::core::physics::rapier::SdpMatrix"],["<section id=\"impl-StructuralPartialEq-for-SdpMatrix2%3CN%3E\" class=\"impl\"><a class=\"src rightside\" href=\"http://docs.rs/parry/0.1.1/src/parry2d/utils/sdp_matrix.rs.html#9\">source</a><a href=\"#impl-StructuralPartialEq-for-SdpMatrix2%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"http://docs.rs/parry/0.1.1/parry2d/utils/sdp_matrix/struct.SdpMatrix2.html\" title=\"struct parry2d::utils::sdp_matrix::SdpMatrix2\">SdpMatrix2</a>&lt;N&gt;</h3></section>","StructuralPartialEq","jumpy::core::physics::rapier::SdpMatrix"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()