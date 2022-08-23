let express      = require('express'),
    app          = express(),
    cors         = require('cors'),
    MockUtils    = require('./mocks'),
    microService = new MockUtils;
      
// config
app.use(cors());


// user
app.get('/user', (req, res) => {
  microService.getUser()
  .then(user => {
    res.status(200).json(user)  
  })
  .catch(error => {
    res.status(404).send(error);
    next();
  });
});

// level
app.get('/level', (req, res) => {
  microService.getLevel(req.query.userId)
  .then(level => {
    res.status(200).json(level)
  })
  .catch(error => {
    res.status(404).send(error)
    next();
  });
});

// purchases
app.get('/purchases', (req, res, next) => {
  microService.getUserPurchases(req.query.userId)
  .then(purchases => {
    res.status(200).json(purchases);
  })
  .catch(error => {
    res.status(404).send(error);
    next();
  });
});

// restriction
app.get('/restrictions', (req, res, next) => {
  microService.getUserRestrictions(req.query.userId)
  .then(restrictions => {
    res.status(200).json(restrictions);
  })
  .catch(error => {
    res.status(404).send(error);
    next();
  });  
});

// shipment
app.get('/shipment-status', (req, res, next) => {
  microService.getShipment(req.query.shipmentId)
  .then(restrictions => {
    res.status(200).json(restrictions);
  })
  .catch(error => {
    res.status(404).send(error);
      next();
  });
});

// payment
app.get('/payment-status', (req, res, next) => {
  microService.getPayment(req.query.paymentId)
  .then(restrictions => {
    res.status(200).json(restrictions);
  })
  .catch(error => {
    res.status(404).send(error);
      next();
  });
});

app.listen(process.env.PORT || 3000, function() {
  console.log('server started!');
});