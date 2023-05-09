const getValues = () => ({
  c1: document.getElementById("c1").value,
  c2: document.getElementById("c2").value,
  c3: document.getElementById("c3").value,
  B: {
    [1]: document.getElementById("L1B").value,
    [2]: document.getElementById("L2B").value,
    [3]: document.getElementById("L3B").value,
  },
  A1: {
    [1]: document.getElementById("L1A1").value,
    [2]: document.getElementById("L2A1").value,
    [3]: document.getElementById("L3A1").value,
  },
  A2: {
    [1]: document.getElementById("L1A2").value,
    [2]: document.getElementById("L2A2").value,
    [3]: document.getElementById("L3A2").value,
  },
  A3: {
    [1]: document.getElementById("L1A3").value,
    [2]: document.getElementById("L2A3").value,
    [3]: document.getElementById("L3A3").value,
  },
})

const calculateAndShow = () => {
  const tableContainer = document.getElementById("tables")
  const v = getValues()

  const min1 = {
    [1]: v.B[1] / v.A2[1],
    [2]: v.B[2] / v.A2[2],
    [3]: v.B[3] / v.A2[3],
  }

  tableContainer.innerHTML = ""

  tableContainer.innerHTML += `
  <table>
  <tbody>
    <tr>
      <td></td>  <td></td> <td></td> <td>c1=${v.c1}</td> <td>c2=${v.c2}</td> <td>c3=${v.c3}</td> <td>c4=0</td> <td>c5=0</td> <td>c6=0</td> <td></td>
    </tr>
    <tr>
      <td>i</td> <td>bazis</td> <td>B</td> <td>A1</td> <td>A2</td> <td>A3</td> <td>A4</td> <td>A5</td> <td>A6</td> <td>min(xi/xij)</td>
    </tr>
    <tr>
      <td>1</td> <td>A4</td> <td>${v.B[1]}</td> <td>${v.A1[1]}</td> <td>${v.A2[1]}</td> <td>${v.A3[1]}</td> <td>1</td> <td>0</td> <td>0</td> <td>${min1[1]}</td>
    </tr>
    <tr>
      <td>2</td> <td>A5</td> <td>${v.B[2]}</td> <td>${v.A1[2]}</td> <td>${v.A2[2]}</td> <td>${v.A3[2]}</td> <td>0</td> <td>1</td> <td>0</td> <td>${min1[2]}</td>
    </tr>
    <tr>
      <td>3</td>  <td>A6</td> <td>${v.B[3]}</td> <td>${v.A1[3]}</td> <td>${v.A2[3]}</td> <td>${v.A3[3]}</td> <td>0</td> <td>0</td> <td>1</td> <td>${min1[3]}</td>
    </tr>
    <tr>
      <td>m+1</td> <td>ij-cj</td> <td>0</td> <td>-${v.c1}</td> <td>-${v.c2}</td> <td>-${v.c3}</td> <td>0</td> <td>0</td> <td>0</td> <td></td>
    </tr>
  </tbody>
</table>
  `

  const v2 = {
    B: {
      [1]: v.B[1] / v.A2[1],
      [2]: v.B[2] - (v.A2[2] * v.B[1]) / v.A2[1],
      [3]: v.B[3] - (v.A2[3] * v.B[1]) / v.A2[1],
      [4]: 0 + (v.c2 * v.B[1]) / v.A2[1],
    },
    A1: {
      [1]: v.A1[1] / v.A2[1],
      [2]: v.A1[2] - (v.A2[2] * v.A1[1]) / v.A2[1],
      [3]: v.A1[3] - (v.A2[3] * v.A1[1]) / v.A2[1],
      [4]: -v.c1 + (v.c2 * v.A1[1]) / v.A2[1],
    },
    A3: {
      [1]: v.A3[1] / v.A2[1],
      [2]: v.A3[2] - (v.A2[2] * v.A3[1]) / v.A2[1],
      [3]: v.A3[3] - (v.A2[3] * v.A3[1]) / v.A2[1],
      [4]: -v.c3 + (v.c2 * v.A3[1]) / v.A2[1],
    },
    A4: {
      [1]: 1 / v.A2[1],
      [2]: 0 - (v.A2[2] * 1) / v.A2[1],
      [3]: 0 - (v.A2[3] * 1) / v.A2[1],
      [4]: 0 + v.c2 / v.A2[1],
    },
    A5: {
      [1]: 0,
      [2]: 1,
      [3]: 0,
      [4]: 0,
    },
  }

  ;(v2.min = {
    [1]: v2.B[1] / v2.A1[1],
    [2]: v2.B[2] / v2.A1[2],
    [3]: v2.B[3] / v2.A1[3],
  }),
    (tableContainer.innerHTML += `
  <br/>
  <br/>
  <br/>
  <table>
  <tbody>
    <tr>
      <td></td>  <td></td> <td></td> <td>c1=${v.c1}</td> <td>c2=${v.c2}</td> <td>c3=${v.c3}</td> <td>c4=0</td> <td>c5=0</td> <td>c6=0</td> <td></td>
    </tr>
    <tr>
      <td>i</td> <td>bazis</td> <td>B</td> <td>A1</td> <td>A2</td> <td>A3</td> <td>A4</td> <td>A5</td> <td>A6</td> <td>min(xi/xij)</td>
    </tr>
    <tr>
      <td>1</td> <td>A4</td> <td>${v2.B[1]}</td> <td>${v2.A1[1]}</td> <td>1</td> <td>${v2.A3[1]}</td> <td>${v2.A4[1]}</td> <td>0</td> <td>0</td> <td>${v2.min[1]}</td>
    </tr>
    <tr>
      <td>2</td> <td>A5</td> <td>${v2.B[2]}</td> <td>${v2.A1[2]}</td> <td>0</td> <td>${v2.A3[2]}</td> <td>${v2.A4[2]}</td> <td>1</td> <td>0</td> <td>${v2.min[2]}</td>
    </tr>
    <tr>
      <td>3</td>  <td>A6</td> <td>${v2.B[3]}</td> <td>${v2.A1[3]}</td> <td>0</td> <td>${v2.A3[3]}</td> <td>${v2.A4[3]}</td> <td>0</td> <td>1</td> <td>${v2.min[3]}</td>
    </tr>
    <tr>
      <td>m+1</td> <td>ij-cj</td> <td>${v2.B[4]}</td> <td>${v2.A1[4]}</td> <td>0</td> <td>${v2.A3[4]}</td> <td>${v2.A4[4]}</td> <td>0</td> <td>0</td> <td></td>
    </tr>
  </tbody>
</table>
  `)

  const v3 = {
    B: {
      [1]: v2.B[1] - (v2.A1[1] * v2.B[2]) / v2.A1[2],
      [2]: v2.B[2] / v2.A1[2],
      [3]: v2.B[3] - (v2.A1[3] * v2.B[2]) / v2.A1[2],
      [4]: v2.B[4] - (v2.A1[4] * v2.B[2]) / v2.A1[2],
    },
    A3: {
      [1]: v2.A3[1] - (v2.A1[1] * v2.A3[2]) / v2.A1[2],
      [2]: v2.A3[2] / v2.A1[2],
      [3]: v2.A3[3] - (v2.A1[3] * v2.A3[2]) / v2.A1[2],
      [4]: v2.A3[4] - (v2.A1[4] * v2.A3[2]) / v2.A1[2],
    },
    A4: {
      [1]: v2.A4[1] - (v2.A1[1] * v2.A4[2]) / v2.A1[2],
      [2]: v2.A4[2] / v2.A1[2],
      [3]: v2.A4[3] - (v2.A1[3] * v2.A4[2]) / v2.A1[2],
      [4]: v2.A4[4] - (v2.A1[4] * v2.A4[2]) / v2.A1[2],
    },
    A5: {
      [1]: v2.A5[1] - (v2.A1[1] * v2.A5[2]) / v2.A1[2],
      [2]: v2.A5[2] / v2.A1[2],
      [3]: v2.A5[3] - (v2.A1[3] * v2.A5[2]) / v2.A1[2],
      [4]: v2.A5[4] - (v2.A1[4] * v2.A5[2]) / v2.A1[2],
    },
  }

  tableContainer.innerHTML += `
  <br/>
  <br/>
  <br/>
  <table>
  <tbody>
    <tr>
      <td></td>  <td></td> <td></td> <td>c1=${v.c1}</td> <td>c2=${v.c2}</td> <td>c3=${v.c3}</td> <td>c4=0</td> <td>c5=0</td> <td>c6=0</td> <td></td>
    </tr>
    <tr>
      <td>i</td> <td>bazis</td> <td>B</td> <td>A1</td> <td>A2</td> <td>A3</td> <td>A4</td> <td>A5</td> <td>A6</td> <td>min(xi/xij)</td>
    </tr>
    <tr>
      <td>1</td> <td>A4</td> <td>${v3.B[1]}</td> <td>0</td> <td>1</td> <td>${v3.A3[1]}</td> <td>${v3.A4[1]}</td> <td>${v3.A5[1]}</td> <td>0</td> <td></td>
    </tr>
    <tr>
      <td>2</td> <td>A5</td> <td>${v3.B[2]}</td> <td>1</td> <td>0</td> <td>${v3.A3[2]}</td> <td>${v3.A4[2]}</td> <td>${v3.A5[2]}</td> <td>0</td> <td></td>
    </tr>
    <tr>
      <td>3</td>  <td>A6</td> <td>${v3.B[3]}</td> <td>0</td> <td>0</td> <td>${v3.A3[3]}</td> <td>${v3.A4[3]}</td> <td>${v3.A5[3]}</td> <td>1</td> <td></td>
    </tr>
    <tr>
      <td>m+1</td> <td>ij-cj</td> <td>${v3.B[4]}</td> <td>0</td> <td>0</td> <td>${v3.A3[4]}</td> <td>${v3.A4[4]}</td> <td>${v3.A5[4]}</td> <td>0</td> <td></td>
    </tr>
  </tbody>
</table>
<br/>
<br/>
<br/>
<br/>
  `
}
