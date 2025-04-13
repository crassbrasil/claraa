        gatewayFeeInCents: 0, // Se você tiver essa informação, substitua
        affiliateCommissionInCents: 0, // Idem
      },
    };

    // Envie os dados para o seu endpoint de armazenamento
    fetch("./api/save_order_data.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Order data saved:", responseData);
      })
      .catch((error) => {
        console.error("Error saving order data:", error);
      });
  }
});
